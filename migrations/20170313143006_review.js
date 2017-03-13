
exports.up = function(knex) {
  return knex.schema.createTable('review', table => {
    table.increments()
    table.string('comment')
    table.timestamp('timestamp').defaultTo(knex.fn.now())
    table.integer('rating')
    table.integer('user_id').references('user.id').onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('review')
};
