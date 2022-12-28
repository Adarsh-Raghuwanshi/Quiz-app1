var chalk = require("chalk");
var readLineSync = require("readline-sync");
var orangeClr = chalk.hex('#FFBD7A').bold.italic;
var greenClr = chalk.hex("#34eb34").bold.italic;
var yellowClr = chalk.hex('#e5eb34').bold.italic;

var userName = readLineSync.question("What's your name? ");
console.log("Welcome " + yellowClr(userName) + ". Let's see, How well" + orangeClr(" YOU KNOW") + " me!");
console.log("\n--------------");

var score = 0;
var questions = [{
    ques: "Where do i live? ",
    ans: "aron"
  },
  {
    ques: "My favorite superhero is? ",
    ans: "ironman"
  },
  {
    ques: "When do i celebrate my birthday? ",
    ans: "7 march"
  },
  {
    ques: "What is my favorite color? ",
    ans: "yellow"
  },
  {
    ques: "Which is my favorite animal? ",
    ans: "dog"
  }];

function askQuestion(que, ans){
  var userReply = readLineSync.question(que);

  if(userReply.toUpperCase() == ans.toUpperCase()){
    score += 5;
    console.log(chalk.blue.bold.italic("You are right!!"));
  }else{
    console.log(yellowClr("That's Wrong!"));
  }
  console.log("Current Score: " + greenClr(score));
  console.log("\n--------------");
}

for(var i = 0; i < questions.length; i++){
  askQuestion(questions[i].ques, questions[i].ans);
}

console.log("\n" + orangeClr("Game Over!!"));
console.log(orangeClr('Your final score is: ') + greenClr(score));

