const express = require('express');
const router = express.Router();

const { User } = require('../db').models;

router.get('/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(error => next(error))
});

router.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.send(user))
    .catch(error => next(error))
});

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(error => next(error))
});

router.put('/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => user.update(req.body))
    .then(user => res.send(user))
    .catch(error => next(error));
})

router.delete('/users/:id', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.sendStatus(204))
  .catch(error => next(error));
})




module.exports = router;
