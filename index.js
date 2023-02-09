var readlineSync = require("readline-sync");
var score=0;

var userName= readlineSync.question("Please enter your name to play : \n")

console.log("WELCOME! " + userName + "\nHi!! this is Rohan here. \n" + "Now it's just a simple quiz to check,'How well do you know me.' \n");

console.log("Just type the option no. which you think is right and PRESS ENTER \n")

console.log()

function personalQuiz(question, answer)
  {
    var userAns= readlineSync.question(question);
  if(userAns === answer){
    console.log("yeah, RIGHT!")
    score= score + 1;
    
    }
else {
  console.log("ugh, WRONG!");
  
}
console.log("Current Score : " + score);
console.log()
  }
var questionOne={
              question: "what's my favour sport ? \n a.Football \n b.Cricket \n c.Chess \n d.Vollyball \n",
              answer: "a",
}
var questionTwo= {
  question:"What is favourite color? \n a.Blue b.Green c. Red \n d.Black \n ",
  answer:"a",
}
var questionThree=
  {
    question:"Where do i live ? \n a.Bangalore \n b.Delhi \n c.Kanpur \n d.Kolkata \n",
    answer: "d",
  }

var questionFour = 
  {
    question:"What's my favourite football team? \n a.Manchester City \n b.Chelsea \n c.Liverpool \n d.Arsenal \n",
    answer: "d",
  }
var questionFive=
  {
    question: "Who is my favorite singer ? \n a.Weekend \b.Atif Aslam \n c.KK \n d.Joji \n "
  }
    var queList =[questionOne,questionTwo,questionThree,questionFour,questionFive]

for( var i=0;i<queList.length;i++)
  {
    var currentQue= queList[i];
    personalQuiz(currentQue.question, currentQue.answer)
  }

console.log("-------")
console.log("your score is : \n" + score + "out of 5")