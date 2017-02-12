"use strict"
const express = require('express')
const router = express.Router();
const Note = require('../models/Note')
const twilio = require('twilio')
const credentials = require('../../twilioCredentials')
const client = require('twilio')(credentials.accountSID,credentials.authToken);
const mongoose = require('mongoose')

router.post('/new/:id/:task', (req,res) => {
    let entry = new Note({
      id: req.params.id,
      msg: req.params.task
    });

    client.messages.create({
    body: req.params.task,
    to: '',
    from: credentials.twilioNumber
  }, function(err, data) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
    } else {
      console.log('Administrator notified');
    }
  });

      console.log("past sms");
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

router.get('/delete/:id', (req,res) =>{
   var uniqueID = req.params.id;
   Note.findOne({
     id: uniqueID
   }, function(err, res) {
     res.remove(function(err){
       if (!err) console.log("success");
     })
   })
});

router.get('/clear', (req,res) => {
    Note.remove({}, function(err) {
      console.log('collection removed');
    });
});

module.exports = router;
