//Crystal Collectors Game Javascript//

//aka CrystalMath...It's Add-ictive---//


//Game Variables//

var redcrystal;
var bluecrystal;
var greencrystal;
var purplecrystal;
var crystalTotal;
var gameTotal;
var crystalPicked = "";
var addtototal;


//Start:Initialize Variables

function startGame() {

    crystalTotal = 0;
    // Set random values:gameTotal(from 19-120) and each crystal value (1-12)
    gameTotal = Math.floor(Math.random() * 120) + 19;

    redcrystal = Math.floor(Math.random() * 12) + 1;
    bluecrystal = Math.floor(Math.random() * 12) + 1;
    purplecrystal = Math.floor(Math.random() * 12) + 1;
    greencrystal = Math.floor(Math.random() * 12) + 1;
    //display gameboard
    console.log("game # = " + gameTotal + " red= " + redcrystal + " blue= " + bluecrystal+ " purplegreen= " + purplecrystal + " green= " + greencrystal);

}
//  --------------PLAY-----------------------
$(document).ready(function () {
    console.log("start");
    startGame();
    //  Which crystal selected?  Determine, add value

    $("img").on('click', function () {

        if(crystalTotal < gameTotal){

            if ($(this).attr("value") === "redcrystal") {
            crystalTotal +=  redcrystal;
        }
            else if ($(this).attr("value") === "bluecrystal") {
            crystalTotal +=  bluecrystal;
        }
            else if ($(this).attr("value") === "purplecrystal") {
            crystalTotal +=  purplecrystal;
        }
            else if ($(this).attr("value") === "greencrystal") {
            crystalTotal +=  greencrystal;
        };
    }
        console.log(crystalTotal);


    });
    //------WIN-----------
    if (crystalTotal === gameTotal){
        
    }

    //------LOSES-----------
    if (crystalTotal > gameTotal){}
});


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


