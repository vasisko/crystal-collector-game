//Crystal Collectors Game Javascript//

//aka CrystalMath...It's Add-ictive---//


//Game Variables//

var redcrystal;
var bluecrystal;
var greencrystal;
var purplecrystal;
var crystalTotal;
var gameTotal;
var crystalPicked="";
var addtototal;


//Start:Initialize Variables

function startGame() {

    crystalTotal=0;
    // Set random values:gameTotal(from 19-120) and each crystal value (1-12)
    gameTotal = Math.floor(Math.random() * 120) + 19;

    redcrystal = Math.floor(Math.random()*12) + 1;
    bluecrystal = Math.floor(Math.random()*12) + 1;
    purplecrystal = Math.floor(Math.random()*12) + 1;
    greencrystal = Math.floor(Math.random()*12) + 1;
//display gameboard
    console.log("game # = " + gameTotal + " red= " +   redcrystal + " green= " + greencrystal);

}
//  PLAY-----------------------
$(document).ready(function() {
console.log("start");
    startGame();
//  Which crystal selected?
 
    $("button").on('click', function(){
    if ($(this).attr("value")==="redcrystal"){
        crystalTotal = crystalTotal +  redcrystal;
    };

    console.log(crystalTotal); 
    

    });
    
     


    }) ;


//  Add crystal's value to crystalTotal
//  Update crystalTotal display

//  if crystalTotal < gameTotal, keep playing 

// else  game over.....
//      if crystalTotal=gameTotal  you WIN  update win count win++
//      else you LOSE update lose count lose++
//      display result win/lose msg
//      update scoreboard win/loss
//  start over:  call start function - zeros out crystals/gametotal,
//  PLAY again


