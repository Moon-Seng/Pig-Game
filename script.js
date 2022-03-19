'use strict';

let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

let Socre0El = document.getElementById('score--0');
let Socre1El = document.getElementById('score--1');
let DiceEl = document.querySelector('.dice');

let rollDice = document.querySelector('.btn--roll');
let holdDice = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

// Start the Game
Socre0El.innerHTML = 0;
Socre1El.innerHTML = 0;
DiceEl.classList.add('hidden');

let acitvePlayer = 0;
let score = [0 , 0];
let currentScore = 0;
let playing = true;

let showDice = function(number){
    DiceEl.classList.remove('hidden');
    DiceEl.src = `dice-${number}.png`;
}

let swiftPlayer = function(){
    document.getElementById(`current--${acitvePlayer}`).innerHTML = 0;
    acitvePlayer = acitvePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}



//User Roll the Dice
rollDice.addEventListener('click',function(){
    if(playing){
        //Generate Ramdom Number
        let DiceResult = Math.trunc(Math.random()*6 +1);
        //Display Dice
        showDice(DiceResult);
        //if !== add to current score && display new score
        if(DiceResult !== 1){
            currentScore += DiceResult;
            document.getElementById(`current--${acitvePlayer}`).innerHTML = currentScore;
        }else if( DiceResult === 1 ){
            //if === 1 swift player
            swiftPlayer();
        }
    }
})

//User Hold Dice

holdDice.addEventListener('click' ,function(){
    if(playing){
        //add current score to total score
        score[acitvePlayer] += currentScore;
        document.getElementById(`score--${acitvePlayer}`).innerHTML = score[acitvePlayer];
        currentScore = 0;
        //if score >= 100 Current player win
        if(score[acitvePlayer] >= 100){
            let winner = document.querySelector(`.player--${acitvePlayer}`);
            winner.classList.add('player--winner');
            DiceEl.classList.add('hidden')
            document.getElementById(`current--${acitvePlayer}`).innerHTML = 0;
            playing = false;
        }else{
            //if score < 100 swith Player
            swiftPlayer()
        }
    }
});

newGame.addEventListener('click' , function(){
    Socre0El.innerHTML = 0;
    Socre1El.innerHTML = 0;
    current0El.innerHTML = 0;
    current1El.innerHTML = 0;
    currentScore = 0;
    score= [0, 0]
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    playing = true;
});