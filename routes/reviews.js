var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Review() {return knex('review')}

// **************************** CREATE ***********************************

// ^^^^^^ Create Review ^^^^^^

router.post('/', function(req, res){

  Review().insert({
    comment: req.body.comment,
    rating: req.body.rating,
    user_id: req.body.user_id,
    recipe_id: req.body.recipe_id
  }, ['comment', 'rating', 'user_id', 'recipe_id']).then(function(result){
    res.json(result);
    })
  });

  // **************************** READ ***********************************

  // ^^^^^^ Read Review ^^^^^^

  router.get('/', function (req, res){

  knex('review').select().then(function(result){
    res.json(result);
  });
});

// ^^^^^^ Read One Review ^^^^^^

router.get('/:id', function (req, res){
knex('review').where('id', req.params.id).first().then(function(result){
  res.json(result);
  });
});

// **************************** UPDATE ***********************************

// ^^^^^^ Update Review ^^^^^^

router.put('/:id', function(req, res){

  Review().where('id', req.params.id).update({
    comment: req.body.comment,
    rating: req.body.rating,
    user_id: req.body.user_id,
    recipe_id: req.body.recipe_id
  }).then(function(result){
    res.json(result);
  });
});

// **************************** Delete ***********************************

// ^^^^^^ Delete Review ^^^^^^

router.delete('/:id', function(req, res){

  Review().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});


module.exports = router
