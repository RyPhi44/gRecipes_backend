
exports.up = function(knex) {
  return knex.schema.createTable('ingredient_recipe', table => {
    table.integer('quantity')
    table.integer('unit')
    table.integer('recipe_id').references('recipe.id').onDelete('cascade')
    table.integer('ingredient_id').references('ingredient.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredient_recipe')
};
