
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments()
    table.string('name')
    table.string('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
};
