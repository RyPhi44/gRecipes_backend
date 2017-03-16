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
// check req.query.email
  var getUsers = knex('user')
  .select()
  if(req.query.email){
    getUsers.where('email', req.query.email)
  }
  getUsers.then(function(result){
    res.json(result);
  });
});

  // ^^^^^^ Read One User ^^^^^^

  router.get('/:id', function (req, res){
  knex('user')
  .where('user', req.params.id)
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
