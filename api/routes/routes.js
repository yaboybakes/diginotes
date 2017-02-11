"use strict"
const express = require('express')
const router = express.Router();
const Note = require('../models/Note')

router.post('/new/:id/:task', (req,res) => {
    let entry = new Note({
      id: req.params.id,
      msg: req.params.task
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

router.get('/clear', (req,res) => {
  res.send(true);
});

router.post('/clear', (req,res) => {
  res.send(true);
});

module.exports = router;
