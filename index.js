function gameLoop(){

    let gameInProgress = true; //flag to use to stop the game
    let playerHand = null;
    let computerHand = null;
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner = null;
    const rounds = 3;
    let counter = 0;
    let playAgain = null;

    // main game loop
    while(gameInProgress && counter < rounds){

        playerHand = prompt("Choose your hand: type (1) for Rock, (2) for"
            + "Paper, (3) for Scissors");

        console.log(`You chose : ${playerHand}`);

        //validating user input
        let validChoice = (playerHand == 1) || (playerHand == 2) 
        || (playerHand == 3);

        while(!validChoice){
            playerHand = prompt("Pick 1,2 or 3 or 0 if you want to quit");
            validChoice = (playerHand == 1) || (playerHand == 2) 
            || (playerHand == 3);
            if (playerHand == 0){
                return;
            }
        }

        // getting a random hand from the computer
        computerHand = Math.ceil(Math.random()*3);
        console.log(`The computer chose : ${computerHand}`);
        
        // getting the round winner
        roundWinner = decideWinner(playerHand, computerHand);

        if (roundWinner == 1){
            playerScore++;
        } else if (roundWinner == 2){
            computerScore++;
        }

        console.log(`playerScore : ${playerScore}\n`
            +`computerScore : ${computerScore}`);
        
        counter++;
    }

    let resultMsg = "";
    if (playerScore > computerScore){
        resultMsg = "You Won!";
    } else if (playerScore < computerScore){
        resultMsg = "You lost!";
    } else { resultMsg = "it's a draw!"}

    console.log(resultMsg);

    input = prompt(resultMsg +"\nWould you like to play again ?\n"
        + "[1]:yes, [0]:no"
    )

    if(parseInt(input, 10)){
        gameLoop();
    }

}

// function that takes the two hands and decides which is the winner, it returns
// 0 : Draw
// 1 : player has won
// 2 : computer has won
// -1 : wrong inputs
function decideWinner(playerHand, computerHand){

    if (playerHand == 1){
        switch(computerHand){
            case 1 : return 0;
            case 2 : return 2;
            case 3 : return 1;
        }
    } else if (playerHand == 2){
        switch(computerHand){
            case 1 : return 1;
            case 2 : return 0;
            case 3 : return 2;
        };
    }else if (playerHand == 3) {
        switch(computerHand){
            case 1 : return 2;
            case 2 : return 1;
            case 3 : return 0;
        };
    } else {return -1;}

}

function main(){
    console.log("Welcome to the game Rock, Paper, Scissors");
    prompt("Press any button to start the game:");

    gameLoop();
}

main()