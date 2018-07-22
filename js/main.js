// $().ready(function(){
//     alert("tsup")
// })


var playerOneRolls=0;
var playerTwoRolls=0;


$().ready(function(){


    $("#l1").click(function(event){
        event.preventDefault();
        $("#storyL1").hide(300);
        $("#storyP1").show(700);
    })

    $("#l2").click(function(event){
        event.preventDefault();
        $("#storyP1").hide(300);
        $("#storyP2").show(700);
    })

    $("#l3").click(function(event){
        event.preventDefault();
        $("#storyP2").hide(300);
        $("#storyP3").show(700);
    })

    $("#l4").click(function(event){
        event.preventDefault();
        $("#storyP3").hide(300);
        $("#storyP4").show(700);
    })

    $("#l5").click(function(event){
        event.preventDefault();
        $("#storyP4").hide(300);
        $("#gconsole").show(700);
    })




    $("#btnP1Roll").click(function(event){
        event.preventDefault();
        $("#btnP2Roll").hide(200);
        $("#btnP2Hold").hide(200);
        $("#btnP1Hold").show(200);
        $("#comnConsole").text("Player 1 says: beat me if you can you stupid jihad!!");
        playerOneRolls=playerOneRolls+1;
        $("#p1RollCount").text(playerOneRolls);
    })

    $("#btnP1Hold").click(function(event){
        event.preventDefault();
        $("#btnP1Roll").hide(200);
        $("#btnP2Roll").show(200);
        $("#btnP1Hold").hide(200);
        $("#comnConsole").text("Game says: Dice passed to player 2 :). Good Luck player 2.");
    })

    $("#btnP2Roll").click(function(event){
        event.preventDefault();
        $("#btnP1Roll").hide(200);
        $("#btnP1Hold").hide(200);
        $("#btnP2Hold").show(200);
        $("#comnConsole").text("Player 2 says: you thought that was bad ass.. check this out you drunken shmirk");
        playerTwoRolls=playerTwoRolls+1;
        $("#p2RollCount").text(playerTwoRolls);
    })

    $("#btnP2Hold").click(function(event){
        event.preventDefault();
        $("#btnP2Roll").hide(200);
        $("#btnP1Roll").show(200);
        $("#btnP2Hold").hide(200);
        $("#comnConsole").text("Game says: Dice passed to player 1 :). Good Luck player 1.");
    })
})