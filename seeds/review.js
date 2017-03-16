
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('review').del()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {comment: 'These sugar cookies are just simply DELICIOUS!', rating: '5', recipe_id: knex('recipe').where('title', 'Sugar Cookies').select('id'), user_id: knex('user').where('name', 'Ryan Phillips').select('id'), },
        {comment: 'As God is my witness I have never had tacos so delightful', rating: '4', recipe_id: knex('recipe').where('title', 'Tacos').select('id'),user_id: knex('user').where('name', 'Jeff Hernandez').select('id') },
        {comment: 'Mmmmmmmmmmmmmmmmmmmmmmm so good!', rating: '3', recipe_id: knex('recipe').where('title', 'Pound Cake').select('id'), user_id: knex('user').where('name', 'Yogi Bera').select('id') }
      ]);
    });
};
