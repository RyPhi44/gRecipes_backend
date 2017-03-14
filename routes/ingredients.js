var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Ingredient() {return knex('ingredient')}

// **************************** CREATE ***********************************

// ^^^^^^ Create Ingredient ^^^^^^

router.post('/', function(req, res){

  Ingredient().insert({
    name: req.body.name
  }, ['name']).then(function(result){
    res.json(result);
    })
  });

  // **************************** READ ***********************************

  // ^^^^^^ Read Ingredient ^^^^^^

  router.get('/', function (req, res){

  knex('ingredient').select().then(function(result){
    res.json(result);
  });
});

// ^^^^^^ Read One Ingredient ^^^^^^

router.get('/:id', function (req, res){
knex('ingredient').where('id', req.params.id).first().then(function(result){
  res.json(result);
  });
});

// **************************** UPDATE ***********************************

// ^^^^^^ Update Ingredient ^^^^^^

router.put('/:id', function(req, res){

  Ingredient().where('id', req.params.id).update({
    name: req.body.name
  }).then(function(result){
    res.json(result);
  });
});

// **************************** Delete ***********************************

// ^^^^^^ Delete Ingredient ^^^^^^

router.delete('/:id', function(req, res){

  Ingredient().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});


module.exports = router
