exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {title: 'Sugar Cookies',
        body: 'This is where the body of my sugar cookie recipe will be',
        user_id: knex('user').where('name', 'Ryan Phillips').select('id'),},

        {title: 'Tacos',
        body: 'Tacos, tacos, tacos, are so delicious, and this is where the body of my taco recipe will be!',
        user_id: knex('user').where('name', 'Jeff Hernandez').select('id'),},

        {title: 'Pound Cake',
        body: 'Pound cakes are delicious. Everyone loves pound cake! This is where the body of my pound cake will go',
        user_id: knex('user').where('name', 'Yogi Bera').select('id'),}
      ]);
    });
};
