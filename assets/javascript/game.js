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
    //initialize totals
    $("#gameTotal").html(gameTotal);
    $("#crystalTotal").html(crystalTotal);
    $('#wins').html(win);    
    $('#losses').html(lose);
}
//  --------------PLAY-----------------------
$(document).ready(function () {
    //initial game board message
    $('#gameOverMsg').text("Pick a crystal");

    // Initialize/refresh/clear variables
    startGame();
    
    // Get players crystal, add & compare
    $("img").on('click', function () {

        //  If restartimg, clear win/lose message once player starts picking crystals
        $('#gameOverMsg').text("Pick a crystal");

         // --- PLAY--- (If player score has not met or exceeded game number)
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

            //did this crystal reach or exceed game total?
            if (crystalTotal === gameTotal){
                //------WIN-----------
                win++;
                $('#gameOverMsg').text("You Won!!");     
                // Update Score
                $('#wins').html(win);  
                //  Restart
                startGame();
            }
            else if (crystalTotal > gameTotal){
                //------LOSE-----------
                lose++;
                $('#gameOverMsg').text("You Lost");
                 // Update Score
                $('#losses').html(lose);
                //  Restart 
                startGame();
            }
        }
    });
   
       
    });


