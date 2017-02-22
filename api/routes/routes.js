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
          twiml.message('crikey mate sounds like a good idea to me. lets get it on that ASAP!');
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

router.get('/count', (req,res) => {
  Note.count({}, function(err, count) {
    console.log(count);
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
  Note.findOneAndRemove({"id":req.params.id}, function (err, todo) {
    if (err) console.log(err);
      res.redirect('/api/all');
  });
});

router.get('/clear', (req,res) => {
    Note.remove({}, function(err) {
      console.log('collection removed');
    });
});

module.exports = router;
