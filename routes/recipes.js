var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Recipe() {return knex('recipe')}

// **************************** CREATE ***********************************

// ^^^^^^ Create Recipe ^^^^^^

router.post('/', function(req, res){

  Recipe().insert({
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id
  }, ['title', 'body', 'user_id']).then(function(result){
    res.json(result);
    })
  });

  // **************************** READ ***********************************

  // ^^^^^^ Read Recipe ^^^^^^

  router.get('/', function (req, res){

  knex('recipe').select().then(function(result){
    res.json(result);
  });
});

// ^^^^^^ Read One Recipe ^^^^^^

router.get('/:id', function (req, res){
knex('recipe')
.join('user', 'user.id', '=', 'recipe.user_id')
.join('ingredient_recipe', 'ingredient_recipe.recipe_id', '=', 'recipe.id')
.join('ingredient', 'ingredient_recipe.ingredient_id', '=', 'ingredient.id')
.select('*', 'ingredient.name as ingredient_name', 'user.name as name')
.where('recipe.id', req.params.id)
// .first()
.then(function(result){
  res.json(result);
  });
});

// **************************** UPDATE ***********************************

// ^^^^^^ Update Recipe ^^^^^^

router.put('/:id', function(req, res){

  Recipe().where('id', req.params.id).update({
    title: req.body.title,
    body: req.body.body,
    user_id: req.body.user_id
  }).then(function(result){
    res.json(result);
  });
});

// **************************** Delete ***********************************

// ^^^^^^ Delete Recipe ^^^^^^

router.delete('/:id', function(req, res){

  Recipe().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});


module.exports = router
