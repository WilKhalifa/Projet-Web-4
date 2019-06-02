
exports.up = function(knex, Promise) {
  return knex.schema
      .alterTable('user', function (t) {
          t.integer('id_dispo', 10).unsigned().references('id_dispo').inTable('dispo')
      })
      .alterTable('chatroom', function (t) {
          t.integer('last_message', 10).unsigned().references('id_message').inTable('messages')
      })
      .alterTable('messages', function (t) {
          t.integer('id', 10).unsigned().references('id').inTable('user')
          t.integer('id_chatroom', 10).unsigned().references('id_chatroom').inTable('chatroom')
      })

};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('user')
        .dropTableIfExists('chatroom')
        .dropTableIfExists('messages');
};
