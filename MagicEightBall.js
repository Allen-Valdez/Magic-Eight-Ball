//You can put your name here
let userName = 'Allen';
//Check if user input a userName
userName ? console.log(`Hello, ${userName}`) :
console.log('Hello');
//User's question
let userQuestion = 'Am I going to be the best programmer?'
//Log the users question
console.log(`${userName} asked : ${userQuestion}`);
//Generate a random number to declare answer
let randomNumber = Math.floor(Math.random() * 8);
//Depending on the randonNumber, it will insert here
let eightBall = '';

//Control flow that takes randomNumber and assigns the reply
switch (randomNumber) {
    case 0:
        eightBall = 'NO!';
        break;
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
        break;
}

console.log(`The magic conch says: ${eightBall}`)