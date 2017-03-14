var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Ingredient_recipe() {return knex('ingredient_recipe')}

// **************************** CREATE ***********************************

// ^^^^^^ Create Ingredient_recipe ^^^^^^

router.post('/', function(req, res){

  Ingredient_recipe().insert({
    quantity: req.body.name,
    unit: req.body.email,
    recipe_id: req.body.recipe_id,
    ingredient_id: req.body.ingredient_id
  }, ['quantity', 'unit', 'recipe_id', 'ingredient_id']).then(function(result){
    res.json(result);
    })
  });

  // **************************** READ ***********************************

  // ^^^^^^ Read Ingredient_recipe ^^^^^^

  router.get('/', function (req, res){

  knex('ingredient_recipe').select().then(function(result){
    res.json(result);
  });
});

  // ^^^^^^ Read One Ingredient_recipe ^^^^^^

  router.get('/:id', function (req, res){
  knex('ingredient_recipe').where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});

// **************************** UPDATE ***********************************

// ^^^^^^ Update Ingredient_recipe ^^^^^^

router.put('/:id', function(req, res){

  Ingredient_recipe().where('id', req.params.id).update({
    quantity: req.body.name,
    unit: req.body.email,
    recipe_id: req.body.recipe_id,
    ingredient_id: req.body.ingredient_id
  }).then(function(result){
    res.json(result);
  });
});

// **************************** Delete ***********************************

// ^^^^^^ Delete Ingredient_recipe ^^^^^^

router.delete('/:id', function(req, res){

  Ingredient_recipe().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});


module.exports = router
