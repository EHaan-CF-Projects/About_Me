'use strict';

var correctAns = 0;

//Username question
alert('Hello! I\'m Evy! Get to know me by answering some questions. But first, please tell me your name!');
var userName = prompt('What is your name?');
console.log('Username is ' + userName);
alert('Nice to meet you, ' + userName + '! Here are the quesions:');

//Cats Question
var pets = prompt('Does Evy like cats?').toLowerCase();
if(pets === 'yes'){
  alert('Definitely! I love cats!');
  correctAns++;
} else {
  alert('What sad soul doesn\'t like cats?');
}
console.log(userName + ' answered ' + pets);

//Shakespeare Question
var iceCream = prompt('Can Evy recite Shakespeare\'s Sonnet 18 from memory?').toLowerCase();
if(iceCream === 'yes'){
  alert('I had to memorize it in 8th grade an it just won\'t leave');
  correctAns++;
} else {
  alert('I can. Ahh, those things your brain never lets go of...');
}
console.log(userName + ' answered ' + iceCream);

//books Question
var books = prompt('Does Evy like to re-read books?').toLowerCase();
if(books === 'yes'){
  alert('Incorrect! I wish I could say I do...');
} else {
  alert('Correct! There is just so much out there to read!');
  correctAns++;
}
console.log(userName + ' answered ' + books);

//Sand Castle Question
var sandCastle = prompt('Has Evy competed in a sand castle building competition?').toLowerCase();
if(sandCastle === 'yes'){
  alert('Twice, even!');
  correctAns++;
}else{
  alert('Unexpected, but true');
}
console.log(userName + ' answered ' + sandCastle);

//Marathon Question
var marathon = prompt('Has Evy ran a marathon?').toLowerCase();
if(marathon === 'yes'){
  alert('Correct. The longest I\'ve run is a half marathon');
}else{
  alert('Absolutely not! That is such a long time to just be running!');
  correctAns++;
}
console.log(userName + ' answered ' + marathon);

//Continents Question
var continents = '3';
for(var attempts = 0; attempts < 4; attempts++){
  var guess = prompt('How many continents has Evy been to?');
  if(guess === continents){
    alert('Correct!');
    correctAns++;
    break;
  }else if(guess < '3'){
    alert('Your guess is too low! Try again!');
  }else if(guess > '3'){
    alert('Your guess is too high! Try again!');
  }
}

//Herb Question
var herbs = ['basil', 'oregano', 'parsley', 'rosemary'];
for(var attempts = 0; attempts < 6; attempts++){
  var guess = prompt('What kind of herbs are in my garden?').toLowerCase();
  if(herbs.includes(guess)){
    alert('You are correct!');
    correctAns++;
    break;
  }else{
    alert('Try again!');
  }
}

// Final Score
alert('You answered ' + correctAns + ' out of 7 questions correctly.');
console.log(userName + ' got ' + correctAns + ' out of 7 questions correct.');