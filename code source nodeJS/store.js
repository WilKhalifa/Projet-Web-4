const knex = require('knex')(require('./knexfile'))
const crypto = require('crypto')

module.exports = {
    createUser ({ mail, password }) {
        console.log(`Add mail ${mail}`)
        const { salt, hash } = saltHashPassword({ password })
        return knex('user').insert({
            salt,
            encrypted_password: hash,
            mail
        }).debug()
    },
    authenticate ({ mail, password }) {
        console.log(`Authenticating mail ${mail}`)
        return knex('user').where({ mail })
            .then(([user]) => {
                if (!user) return { success: false }
                const { hash } = saltHashPassword({
                    password,
                    salt: user.salt
                })
                return { success: hash === user.encrypted_password }
            })
    }
}
function saltHashPassword ({
                               password,
                               salt = randomString()
                           }) {
    const hash = crypto
        .createHmac('sha512', salt)
        .update(password)
    return {
        salt,
        hash: hash.digest('hex')
    }
}
function randomString () {
    return crypto.randomBytes(4).toString('hex')
}