//Crystal Collectors Game Javascript//

//aka CrystalMath...It's Add-ictive---//


//Game Variables//
var win=0;
var lose=0;
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
    gameTotal=0;
    crystalTotal = 0;
    // Set random values:gameTotal(from 19-120) and each crystal value (1-12)
    gameTotal = Math.floor(Math.random() * 101) + 19;

    redcrystal = Math.floor(Math.random() * 12) + 1;
    bluecrystal = Math.floor(Math.random() * 12) + 1;
    purplecrystal = Math.floor(Math.random() * 12) + 1;
    greencrystal = Math.floor(Math.random() * 12) + 1;
    //display gameboard
    console.log("game # = " + gameTotal + " red= " + redcrystal + " blue= " + bluecrystal+ " purplegreen= " + purplecrystal + " green= " + greencrystal);

}
//  --------------PLAY-----------------------
$(document).ready(function () {
    
    // Initialize variables, clear var's
    startGame();

    $("#gameTotal").html(gameTotal);
    $("img").on('click', function () {

        //  If player score has not met or exceeded game number, PLAY
        if(crystalTotal < gameTotal){

            // Get clicked crystal type, add value to players total
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
            }
            $("#crystalTotal").html(crystalTotal);
        }
        
    //------WIN-----------
        else if (crystalTotal === gameTotal){
            win++;
            $('#gameOverMsg').text("You Won!!");      
        }

    //------LOSES-----------
        else if (crystalTotal > gameTotal){
            lose++;
            $('#gameOverMsg').text("You Lost");
        }

    // Update Score
        $('#wins').html(win);    
        $('#losses').html(lose);
        
    });
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


