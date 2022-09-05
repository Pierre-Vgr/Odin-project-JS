function getComputerChoice () {
    var values = ["rock","paper","scisors"];
    return values[Math.floor(Math.random() * values.length)];
    }

    function playround (playerchoice,computerchoice) {
        if (playerchoice == computerchoice){
            console.log("égalité")
        }
        else if ((playerchoice == computerchoice) || ())

    }

    const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
