/**
 * Created by Magnus on 04-09-2016.
 */
var express = require('express');


var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];


var _getRandomJoke = function(){
    return jokes[Math.floor((Math.random() * 3))];
};

var _addJoke = function(joke){
    jokes.push(joke);
};

module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
};
