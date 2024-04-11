scores = {
    wins:0,
    losses:0,
    ties:0,
}

function resetScoreFunc(){

scores = {
    wins:0,
    losses:0,
    ties:0,}
}


function resetScore(){

    let scorePhrase = document.querySelector(".js-score")
    resetScoreFunc()

    scorePhrase.innerHTML = 
    `Wins: ${scores.wins} |
     Losses: ${scores.losses} |
     Ties: ${scores.ties}`;

}

        