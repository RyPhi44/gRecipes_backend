
exports.up = function(knex) {
  return knex.schema.createTable('recipe', table =>{
    table.increments()
    table.string('title')
    table.string('body')
    table.integer('user_id').references('user.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe')
};
