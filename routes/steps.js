var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Step() {return knex('step')}

// **************************** CREATE ***********************************

// ^^^^^^ Create Step ^^^^^^

router.post('/', function(req, res){

  Step().insert({
    body: req.body.body,
    step_number: req.body.step_number,
    recipe_id: req.body.recipe_id
  }, ['body', 'step_number', 'recipe_id']).then(function(result){
    res.json(result);
    })
  });

  // **************************** READ ***********************************

  // ^^^^^^ Read Step ^^^^^^

  router.get('/', function (req, res){

  knex('step')
  .join('recipe', 'recipe.id', '=', 'step.recipe_id')
  .select('*', 'step.body as step_body', 'recipe.body as recipe_body')
  .then(function(result){
    res.json(result);
  });
});

// ^^^^^^ Read One Step ^^^^^^

router.get('/:id', function (req, res){
knex('step')
.join('recipe', 'recipe.id', '=', 'step.recipe_id')
.select('*', 'step.body as step_body', 'recipe.body as recipe_body' )
.where('step.id', req.params.id)
.first()
.then(function(result){
  res.json(result);
});
});

// **************************** UPDATE ***********************************

// ^^^^^^ Update Step ^^^^^^

router.put('/:id', function(req, res){

  Step().where('id', req.params.id).update({
    body: req.body.body,
    step_number: req.body.step_number,
    recipe_id: req.body.recipe_id
  }).then(function(result){
    res.json(result);
  });
});

// **************************** Delete ***********************************

// ^^^^^^ Delete Step ^^^^^^

router.delete('/:id', function(req, res){

  Step().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});


module.exports = router
