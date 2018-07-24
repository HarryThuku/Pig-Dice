// Business logic:

// game over:
function gameover(){
    if((playerOneRolls === 6) && (playerTwoRolls === 6)){
        $("#gconsole").hide(200);
        $("#gameOver").show(500);
    }
};

function winner(){
    if(playerOneScore===playerTwoScore){
        $("#result").text("The game ends with a tie. The winner is still undecided. There is alot of tension in the air, as the game has to be re-played.");
    }
    else if(playerOneScore<playerTwoScore){
        $("#result").text("The SAS take the lead. The angry SRS promise to abort camp in six hours. Despite the agreement, the SAS maintains high guard, as the enemy is well known for its cunningness.");
    }
    else{
        $("#result").text("The SRS take the lead. The SAS march away, though the SRS scout the skies fearing an enemy air to surface attack, as their possition has been discovered.");
    }
};


// Player1:
var player1Name;
var playerOneScore=0;
var playerOneRolls=0;

function counter1(){
    if(playerOneRolls<=5){
        $("#btnP2Roll").hide(200);
        $("#btnP2Hold").hide(200);
        $("#btnP1Hold").show(200);
        commentP1();
        playerOneRolls=playerOneRolls+1;
        $("#p1RollCount").text(playerOneRolls);
    }
    else{
        $("#btnP1Roll").hide();
    }
};
function commentP1(){
    if(playerOneRolls===1){
        $("#comnConsole").text(">>"+player1Name+" says: retard.. i bet you'll roll a 1. treat the dice like a lady. it migth roll a 4!");
    }
    else if(playerOneRolls===2){
        $("#comnConsole").text(">>"+player1Name+" says: did i tell you that your men's aim sucks. Next time you come to war, bring men worth our ability.");
    }
    else if(playerOneRolls===3){
        $("#comnConsole").text(">>"+player1Name+" says: why am i having a feeling you'll loose..");
    }
    else if(playerOneRolls===4){
        $("#comnConsole").text(">>"+player1Name+" says: beat me if you can you stupid jihad!!");
    }
    else if(playerOneRolls===5){
        $("#comnConsole").text(">>"+player1Name+" says: there you go. it'd be a shame if you walked out of here the looser. like usual..");
    }
    else{
        $("#comnConsole").text(">>"+player1Name+" says: Last chance.!");
    }
};

function p1hold(){
    $("#btnP1Roll").hide(200);
        if(playerTwoRolls<=5){
            $("#btnP2Roll").show(200);
        }
        else{
            $("#btnP2Hold").show(200);            
        }
    $("#btnP1Hold").hide(200);
    $("#comnConsole").text(">><<Game says: Dice passed to "+player2Name+". Your men are counting on you!");
    gameover();
    winner();
};

// player2:
var player2Name;
var playerTwoScore=0;
var playerTwoRolls=0;
function counter2(){
    if(playerTwoRolls<=5){
        $("#btnP1Roll").hide(200);
        $("#btnP1Hold").hide(200);
        $("#btnP2Hold").show(200);
        commentP2();
        playerTwoRolls=playerTwoRolls+1;
        $("#p2RollCount").text(playerTwoRolls);
    }
    else{
        $("#btnP2Roll").hide();
    }
};
function commentP2(){
    if(playerTwoRolls===1){
        $("#comnConsole").text(">>"+player2Name+" says: you thought that was bad ass.. check this out you drunken shmirk");
    }
    else if(playerTwoRolls===2){
        $("#comnConsole").text(">>"+player2Name+" says: why is it that you americans have fat hungry kids..");
    }
    else if(playerTwoRolls===3){
        $("#comnConsole").text(">>"+player2Name+" says: i like how this is turning out. Maybe at the end when you get home youll miss me. dont come looking for me, ill shoot you");
    }
    else if(playerTwoRolls===4){
        $("#comnConsole").text(">>"+player2Name+" says: you americans cant even play fair in a fair match. have you ever been told you have a loud mouth? shut up some times, you might gain some weight actually..");
    }
    else if(playerTwoRolls===5){
        $("#comnConsole").text(">>"+player2Name+" says: at the end of this i'll have some whiskey. you are allowed to join me, i got some sea water for my guests. plus you can carry the whiskey bottle home when i'm done");
    }
    else{
        $("#comnConsole").text(">>"+player2Name+" says: Whoaaaa!");
    }
};

function p2hold(){
    $("#btnP2Roll").hide(200);
        if(playerOneRolls<=5){
            $("#btnP1Roll").show(200);
        }
        else{
            $("#btnP1Hold").show(200);
        }
        $("#btnP2Hold").hide(200);
        $("#comnConsole").text(">><<Game says: Dice passed to "+player1Name+". Roll carefully!");
        gameover();
        winner();
};


function rematch(){
    playerOneScore=0;
    playerOneRolls=0;
    playerTwoScore=0;
    playerTwoRolls=0;
    $("#p1RollCount").text(playerOneRolls);
    $("#p2RollCount").text(playerTwoRolls);
    $("#gameOver").hide(200);
    $("#gconsole").show(300);
    $("#btnP1Roll").show(200);
    $("#btnP1Hold").hide(200);
    $("#btnP2Roll").show(200);
    $("#btnP2Hold").hide(200);
};

// User interface logic:

$().ready(function(){
    $("#l1").click(function(event){
        event.preventDefault();
        $("#storyL1").hide(300);
        $("#storyP1").show(700);
    });
    $("#l2").click(function(event){
        event.preventDefault();
        $("#storyP1").hide(300);
        $("#storyP2").show(700);
    });
    $("#l3").click(function(event){
        event.preventDefault();
        $("#storyP2").hide(300);
        $("#storyP3").show(700);
    });
    $("#l4").click(function(event){
        event.preventDefault();
        $("#storyP3").hide(300);
        $("#storyP4").show(700);
    });
    $("#l5").click(function(event){
        event.preventDefault();
        $("#storyP4").hide(300);
        $("#a1").show(700);
    });
    $("#l6").click(function(event){
        event.preventDefault();
        player1Name=$("#p1Alias").val();
        if(player1Name.length<=3){
            alert("Please make sure that the player name has atleast 4 characters.");
            $("#p1Alias").val("");
        }
        else{
            $("#a1").hide(300);
            $("#a2").show(700);
            $("#P1A").text(player1Name);
        }
    });
    $("#l7").click(function(event){
        event.preventDefault();
        player2Name=$("#p2Alias").val();
        if(player2Name.length<=3){
            alert("Please make sure that the player name has atleast 4 characters.");
            $("#p2Alias").val("");
        }
        else{
            $("#a2").hide(300);
            $("#gconsole").show(700);
            $("#P2A").text(player2Name);
        }
    });
    $("#btnP1Roll").click(function(event){
        event.preventDefault();
        counter1();
        // rolledVal();
    });
    $("#btnP1Hold").click(function(event){
        event.preventDefault();
        p1hold();
    });
    $("#btnP2Roll").click(function(event){
        event.preventDefault();
        counter2();
    });
    $("#btnP2Hold").click(function(event){
        event.preventDefault();
        p2hold();
    });
    $("#rematch").click(function(event){
        event.preventDefault();
        rematch();
    });
});






// var rollVal=3;



// function rolledVal(){
//     if(rollVal<=4){
//         $("#diceValP1").text('<img src"../images/diceFace/26551.jpg">');
//     }
// };
































window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		
		theta =  2 * Math.PI / n,
		currImage = 0
	;
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var	
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true);
		
		function onClick(e) {
			e.stopPropagation();
			
			var t = e.target;
			if (t.tagName.toUpperCase() != 'BUTTON')
				return;
			
			if (t.classList.contains('next')) {
				currImage++;
			}
			else {
				currImage--;
			}
			
			rotateCarousel(currImage);
		}
			
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
	
}