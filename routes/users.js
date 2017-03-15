var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function User() {return knex('user')}

// **************************** CREATE ***********************************

// ^^^^^^ Create User ^^^^^^

router.post('/', function(req, res){

  User().insert({
    name: req.body.name,
    email: req.body.email
  }, ['id', 'name', 'email']).then(function(result){
    res.json(result);
    })
  });

  // **************************** READ ***********************************

  // ^^^^^^ Read User ^^^^^^

  router.get('/', function (req, res){

  knex('user')
  // .join('review', 'review.id', '=', 'user.user_id')
  .select()
  .then(function(result){
    res.json(result);
  });
});

  // ^^^^^^ Read One User ^^^^^^

  router.get('/:id', function (req, res){
  knex('user')
  .join('review', 'review.id', '=', 'user.user_id')
  .where('user.id', req.params.id)
  .first()
  .then(function(result){
    res.json(result);
  });
});

// **************************** UPDATE ***********************************

// ^^^^^^ Update User ^^^^^^

router.put('/:id', function(req, res){

  User().where('id', req.params.id).update({
    name: req.body.name,
    email: req.body.email
  }).then(function(result){
    res.json(result);
  });
});

// **************************** Delete ***********************************

// ^^^^^^ Delete User ^^^^^^

router.delete('/:id', function(req, res){

  User().where('id', req.params.id).del().then(function(result){
    res.json(result);
  });
});


module.exports = router
