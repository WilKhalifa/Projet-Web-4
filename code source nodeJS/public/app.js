const CreateUser = document.querySelector('.CreateUser');

CreateUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const mail = CreateUser.querySelector('.mail').value
    const password = CreateUser.querySelector('.password').value
    post('/createUser', { mail, password })
})
const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
    e.preventDefault()
    const mail = Login.querySelector('.mail').value
    const password = Login.querySelector('.password').value
    post('/login', { mail, password })
        .then(({ status }) => {
            if (status === 200) alert('login success')
            else alert('login failed')
        })
})
function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}