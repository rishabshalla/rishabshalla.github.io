'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct😊 number'

// document.querySelector('.number').textContent = '9'
// document.querySelector('.highscore').textContent = '999'

// document.querySelector('.guess').value = '22'

let secNum = Math.trunc(Math.random()*20) + 1;
console.log(secNum);
let score = 20;
let Hscore = Number(document.querySelector('.highscore').textContent);
console.log(Hscore);
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if(score>0){
        if(!guess) {
            document.querySelector('.message').textContent = 'No Number';
        }else if (guess === secNum){
            document.querySelector('.message').textContent = 'Correct';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '50rem'
            document.querySelector('.number').textContent = 'WINNER WINNER CHICKEN DINNER'
            if(document.querySelector('.score').textContent >= document.querySelector('.highscore').textContent){
                document.querySelector('.highscore').textContent = score;
            }
        }else if (guess > secNum){
            document.querySelector('.message').textContent = 'too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else if (guess < secNum){
            document.querySelector('.message').textContent = 'too low'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'wrong number';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }else{
        alert("you lost");
    }
})
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    secNum = Math.trunc(Math.random()*20) + 1;
    console.log(secNum);
    score = 20;
})