
exports.up = function(knex) {
  return knex.schema.createTable('recipe', table =>{
    table.increments()
    table.string('title')
    table.string('body')
    table.integer('prep_time')
    table.integer('cook_time')
    table.integer('step_id').references('step.id').onDelete('cascade')
    table.integer('user_id').references('user.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe')
};
