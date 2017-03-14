
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'sugar'},
        {name: 'milk'},
        {name: 'chocolate chips'}
      ]);
    });
};
