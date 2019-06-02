
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('user', function (t) {
            t.increments('id').primary()
            t.string('mail').notNullable()
            t.string('password').notNullable()
            t.timestamps(false, true)
            t.integer('age')
        })
        .createTable('dispo', function (t) {
            t.increments('id_dispo').primary()
            t.boolean('lundi')
            t.boolean('mardi')
            t.boolean('mercredi')
            t.boolean('jeudi')
            t.boolean('vendredi')
            t.boolean('samedi')
            t.boolean('dimanche')
        })
        .createTable('chatroom', function (t) {
            t.increments('id_chatroom').primary()
            t.date('date_chatroom')
        })
        .createTable('messages', function(t) {
            t.increments('id_message').primary()
            t.dateTime('date')
            t.string('content')
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('user')
        .dropTableIfExists('dispo')
        .dropTableIfExists('chatroom')
        .dropTableIfExists('messages');
};
