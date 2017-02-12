"use strict"
const express = require('express')
const router = express.Router();
const Note = require('../models/Note')
const twilio = require('twilio')
const credentials = require('../../twilioCredentials')
const client = require('twilio')(credentials.accountSID,credentials.authToken);
const mongoose = require('mongoose')

router.post('/new/:id/:task/:sms', (req,res) => {

    let entry = new Note({
      id: req.params.id,
      msg: req.params.task
    });

    var mobileNote = req.params.sms
    entry.save((err,response) => {
      if (err) console.log(err);
        if (mobileNote !== null) {
          const twiml = new twilio.TwimlResponse();
          twiml.message('crikey mate! thats a good idea. lets get it done ASAP.');
          res.writeHead(200, {'Content-Type': 'text/xml'});
          res.end(twiml.toString());
        } else {
          res.send(true)
        }
    });
});

router.post('/sms', (req,res) => {
  res.redirect('/api/new/1/' + req.body.Body + '/true');
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
