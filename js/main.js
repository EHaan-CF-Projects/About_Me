'use strict';

//Username question
alert('Hello! I\'m Evy! Get to know me by answering some questions. But first, please tell me your name!');
var userName = prompt('What is your name?');
console.log('Username is ' + userName);
alert('Nice to meet you, ' + userName + '! Here are the quesions:');

//Cats Question
var pets = prompt('Does Evy like cats?').toLowerCase();
if(pets === 'yes'){
  alert('Definitely! I love cats!');
} else {
  alert('What sad soul doesn\'t like cats?');
}
console.log(userName + ' answered ' + pets);

//Ice Cream Question
var iceCream = prompt('Can Evy recite Shakespeare\'s Sonnet 18 from memory?').toLowerCase();
if(iceCream === 'yes'){
  alert('I had to memorize it in 8th grade an it just won\'t leave');
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
}
console.log(userName + ' answered ' + books);

//Sand Castle Question
var sandCastle = prompt('Has Evy competed in a sand castle building competition?').toLowerCase();
if(sandCastle === 'yes'){
  alert('Twice, even!');
}else{
  alert('Unexpected, but true');
}
console.log(userName + ' answered ' + sandCastle);

//Marathon Question
var marathon = prompt('Has Evy ran a marathon?').toLowerCase();
if(marathon === 'yes'){
  alert('Nope, just a half');
}else{
  alert('Correct! That is such a long time to just be running!');
}
console.log(userName + ' answered ' + marathon);