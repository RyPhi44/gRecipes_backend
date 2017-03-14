
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step').del()
    .then(function () {
      // Inserts seed entries
      return knex('step').insert([
        {body: 'Combine all ingredients into one big bowl and mix them until no lumps remain', step_number: '1', recipe_id: knex('recipe').where('title', 'Sugar Cookies').select('id')},
        {body: 'Drain the excess grease from the pan and pour water and seasoning into skillet', step_number: '6', recipe_id: knex('recipe').where('title', 'Tacos').select('id')},
        {body: 'Place in the oven for 20 minutes or until golden brown on top', step_number: '9', recipe_id: knex('recipe').where('title', 'Pound Cake').select('id')}
      ]);
    });
};
