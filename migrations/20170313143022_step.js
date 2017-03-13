
exports.up = function(knex) {
  return knex.schema.createTable('step', table => {
    table.increments()
    table.string('body')
    table.integer('step_number')
    table.integer('recipe_id').references('recipe.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('step')
};
