"use strict"
const express = require('express')
const router = express.Router();
const Note = require('../models/Note')

router.post('/new/:id/:msg', (req,res) => {
  console.log("saving to db");

    let entry = new Note({
      id: req.params.id,
      message: req.params.msg
    });

    entry.save((err,response) => {
      if (err) console.log(err);
        res.send(true);
    });
});

router.get('/all', (req,res) => {
  Note.find({},(err,results) => {
    let tasks = [];
    results.forEach(function(todo){
      tasks.push(todo);
    });
    res.send(tasks);
  });
});


module.exports = router;
