"use strict"
const express = require('express')
const router = express.Router();
const Note = require('../models/Note')

router.post('/new/:id/:msg', (req,res) => {

    let entry = new Note({
      id: req.params.id,
      message: req.params.msg
    });

    entry.save((err,response) => {
      if (err) console.log(err);
        res.send(true);
    });
});

router.get('/', (req,res) => {
  console.log("in api");
  res.send(Whoops404);
})

module.exports = router;
