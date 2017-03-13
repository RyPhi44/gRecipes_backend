
exports.up = function(knex) {
  return knex.schema.createTable('ingredient', table => {
    table.increments()
    table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredient')
};
