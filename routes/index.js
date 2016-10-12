var express = require('express');
var router = express.Router();
var jok = require("C:/Users/Magnus/Dropbox (Schantz)/Privat/Skole/Git/ExpressEx2/model/jokes.js")
var session = require("express-session");

//counters
session.jokeCount = 0;
session.jokesCount = 0;
session.storeJokeCount = 0;

router.get('/joke', function(req, res, next) {
  session.jokeCount++;
  res.render('randomJoke', { randomJoke: jok.getRandomJoke()   });
});

router.get('/jokes', function(req, res, next) {
  session.jokesCount++;
  res.render('allJokes', { allJokes: jok.allJokes   });
});

router.get('/addJoke', function(req, res, next) {
  session.storeJokeCount++;
  res.render('newJoke', {    });
});

router.post('/storeJoke', function(req, res, next) {
  jok.addJoke(req.body.newItem);
  res.render('allJokes', { allJokes: jok.allJokes   });
});

router.get('/loginPage', function(req, res, next) {
  res.render('loginPage', {    });
});

/////REST

router.get("/api/joke/random",function(req,res,next){
  res.end(JSON.stringify(jok.getRandomJoke()));
})

router.get("/api/jokes",function(req,res,next){
  res.end(JSON.stringify(jok.allJokes));
})



//////////

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: session.userName,
    jokeCount: session.jokeCount,
    jokesCount: session.jokesCount,
    storeJokeCount: session.storeJokeCount
  });
});




module.exports = router;
