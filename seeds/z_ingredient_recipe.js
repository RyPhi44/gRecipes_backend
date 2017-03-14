
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipe').insert([
        {quantity: 3,
        unit: 'cups',
        ingredient_id: knex('ingredient').where('name', 'sugar').select('id'),
        recipe_id: knex('recipe').where('title', 'Sugar Cookies').select('id')
      },

        {quantity: 5,
        unit: 'ounces',
        ingredient_id: knex('ingredient').where('name', 'milk').select('id'), recipe_id: knex('recipe').where('title', 'Tacos').select('id')
      },

        {quantity: 6,
        unit: 'tablespoons',
        ingredient_id: knex('ingredient').where('name', 'chocolate         chips').select('id'),
        recipe_id: knex('recipe').where('title', 'Pound Cake').select('id')
      }
      ]);
    });
};
