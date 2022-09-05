function getcomputerChoice() {
    var values = ["rock","paper","scisors"];
    return values[Math.floor(Math.random() * values.length)];
    }

    function playRound (playerSelection,computerSelection) {

    // rock > scisors
    // player > computer
        if ((playerSelection == "rock") &&  (computerSelection == "scisors")){
            return "you win";
        }
    // computer beats player
        else if ((computerSelection == "rock") && (playerSelection == "scisors")) {
            return "Computer win";
        }
    // scisors > paper
    // player > computer
        if ((playerSelection == "scisors") &&  (computerSelection == "paper")){
            return "you win";
        }
    // computer beats player
        else if ((computerSelection == "scisors") && (playerSelection == "paper")) {
            return "Computer win";
        }
    // paper > rock
        if ((playerSelection == "paper") &&  (computerSelection == "rock")){
            return "you win";
        }
    // computer beats player
        else if ((computerSelection == "paper") && (playerSelection == "rock")) {
            return "Computer win";
        }
    // égalité
        else {
            return "égalité";
        }
    }

   
function game() {
    const playerSelection = prompt("enter rock, paper or scisors");
    for (let i = 0; i < 5; i++) {

        const computerSelection = getcomputerChoice();
        console.log(playRound(playerSelection, computerSelection));

             }
     
}
