//1- how to generate game variables
// three variables score,roundscore, player

// 2- genrating random numbers
//3- Manipulating the DOM 
//4- reading the dom 
//5- how do we change the CSS 

var globalScores,roundScores,activePlayer;
init();


// Roll the dice by clicking on roll button 
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    // generating random number
    
    var dice  =Math.floor(Math.random()*6)+1;
    //console.log(dice);
    //display the dice image based on the random number
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src='dice-'+ dice+'.png';

    // impliment the condition for the switching of the player based on dice value 

    if (dice!==1){
        //add the score 
        //roundScores=roundScores+dice;
        roundScores +=dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;


    }else{
        //call the next player 
        nextPlayer();
    
    }
});

//iplimentation of hold function 
/*
1- clicking on hold will be triger an event 
2- we have to add the the crrent score to our gloabl score 
3- update the UI 
4- if the player has won 
5- switching to next player
*/

document.querySelector('.btn-hold').addEventListener('click',function(){

    //2 adding of current score to global score 
    globalScores[activePlayer]+=roundScores;

    //update the UI 

    document.querySelector('#score-'+activePlayer).textContent=globalScores[activePlayer];

    //check if the player has won

    if (globalScores[activePlayer]>=20){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').remove('active');
        //hide the dice
        document.querySelector('.dice').style.display='none';
        


    }else{
        nextPlayer();
    }


})

//next player function

/*
1- decide on who will be the next player

2- reset the round score 

3- Updat eh current score for both the players 

4- CSS manipulation - ????
*/

function nextPlayer() {
   activePlayer === 0 ? activePlayer=1 : activePlayer=0;
   roundScores=0;

   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';
   
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   document.querySelector('.dice').style.display='none';
   

}

//new game event should reset everything 

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    globalScores=[0,0];
    roundScores=0;
    activePlayer=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

}















