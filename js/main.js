'use strict';

var correctAns = 0;
var userName;

//Username question
var userNameQuestion = function(){
  alert('Hello! I\'m Evy! Get to know me by answering some questions. But first, please tell me your name!');
  userName = prompt('What is your name?');
  console.log('Username is ' + userName);
  alert('Nice to meet you, ' + userName + '! Here are the questions:');
};

//Cats Question
var catsQuestion = function(){
  var cats;
  do {
    cats = prompt('Does Evy like cats?').toLowerCase();
  } while(cats !== 'yes' && cats !== 'no');

  if(cats === 'yes'){
    alert('Correct! I love cats!');
    correctAns++;
  } else {
    alert ('Incorrect. What sad soul doesn\'t like cats?');
  }
};

//Shakespeare Question
var shakespeareQuestion = function(){
  var shakespeare;
  do {
    shakespeare = prompt('Can Evy recite Shakespeare\'s Sonnet 18 from memory?').toLowerCase();
  } while(shakespeare !== 'yes' && shakespeare !== 'no');

  if(shakespeare === 'yes'){
    alert('Correct! I had to memorize it in 8th grade an it just won\'t leave.');
    correctAns++;
  } else {
    alert ('Incorrect. I can. Ahh, those things your brain never lets go of...');
  }
};

//books Question
var booksQuestion = function(){
  var books;
  do {
    books = prompt('Does Evy like to re-read books?').toLowerCase();
  } while(books !== 'yes' && books !== 'no');

  if(books === 'no'){
    alert ('Correct! There is just so much out there to read!');
    correctAns++;
  } else {
    alert('Incorrect! I wish I could say I do...');
  }
};

//Sand Castle Question
var sandCastleQuestion = function(){
  var sandCastle;
  do {
    sandCastle = prompt('Has Evy competed in a sand castle building competition?').toLowerCase();
  } while(sandCastle !== 'yes' && sandCastle !== 'no');

  if(sandCastle === 'yes'){
    alert('Correct! Twice, even!');
    correctAns++;
  } else {
    alert ('Incorrect.It\'s Unexpected, but true');
  }
};

//Marathon Question
var marathonQuestion = function(){
  var marathon;
  do {
    marathon = prompt('Has Evy ran a marathon?').toLowerCase();
  } while(marathon !== 'yes' && marathon !== 'no');

  if(marathon === 'no'){
    alert('Correct! The longest I\'ve run is a half marathon.');
    correctAns++;
  } else {
    alert ('Incorrect! I most definitely not!');
  }
};

//Continents Question
var continentsQuestion = function(){
  var continents = '3';
  for(var attempts = 0; attempts < 4; attempts++){
    var guess = prompt('How many continents has Evy been to?');
    if(guess === continents){
      alert('Correct!');
      correctAns++;
      break;
    } if (guess < '3'){
      alert('Your guess is too low! Try again!');
    } if (guess > '3'){
      alert('Your guess is too high! Try again!');
    }
  }
  console.log(userName + ' answered ' + guess);
};

//Herb Question
var herbsQuestion = function(){
  var herbs = ['basil', 'oregano', 'parsley', 'rosemary'];
  for(var attempts = 0; attempts < 6; attempts++){
    var guess = prompt('What kind of herbs are in my garden?').toLowerCase();
    if (herbs.includes(guess)){
      alert('Correct!');
      correctAns++;
      break;
    } else {
      alert('Try again!');
    }
  }
  console.log(userName + ' answered ' + guess);
  alert('I have basil, oregano, parsley, and rosemary in my garden!');
};

userNameQuestion();
catsQuestion();
shakespeareQuestion();
booksQuestion();
sandCastleQuestion();
marathonQuestion();
continentsQuestion();
herbsQuestion();

// Final Score
alert('You answered ' + correctAns + ' out of 7 questions correctly.');
console.log(userName + ' got ' + correctAns + ' out of 7 questions correct.');
