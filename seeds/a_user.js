
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Ryan Phillips', email: 'ryan@gmail.com'},
        {name: 'Jeff Hernandez', email: 'jeff@gmail.com'},
        {name: 'Yogi Bera', email: 'yogi@gmail.com'}
      ]);
    });
};
