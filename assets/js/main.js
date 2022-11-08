
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// Buttons geholt
const steinButton = document.querySelector("#stein");
const papierButton = document.querySelector("#papier");
const schereButton = document.querySelector("#schere");
// Output geholt
let outputUserWin = document.querySelector("#userWin");
let outputCompWin = document.querySelector("#compWin");

let compAuswahl;
let userAuswahl;
let amountRounds = 0;


steinButton.addEventListener("click", () => {
    //Beim click soll der Wert in die Variable gepeichert werden
    userAuswahl = rock;
    console.log('Userauswahl ist Stein');
    //COMP Zufall zwischen 0-2
    compChoose()
    console.log(compAuswahl);

    //Anzahl gespielte Runden erhöhen
    amountRounds++;

    whoWin();
    roundsToWin();
})

papierButton.addEventListener("click", () => {
    userAuswahl = paper;
    console.log('Userauswahl ist Papier');

    compChoose()
    console.log(compAuswahl);

    amountRounds++;
    whoWin();
    roundsToWin();
})

schereButton.addEventListener("click", () => {
    userAuswahl = scissors;
    console.log('Userauswahl ist Schere');

    compChoose()
    console.log(compAuswahl);

    amountRounds++;
    whoWin();
    roundsToWin();
})

//Zähler wer wie oft gewonnen hat
let wincountComp = 0;
let winCountUser = 0;

//Funktion wann wer gewinnt
const whoWin = () => {
    if (userAuswahl === rock && compAuswahl === scissors) {
        console.log("User Win");
        document.querySelector("#textWin").innerHTML = "USER WIN"
        //Gewinn auf den Zählerstand packen
        winCountUser += 1;


    } else if (userAuswahl === paper && compAuswahl === rock) {
        console.log("User Win");
        document.querySelector("#textWin").innerHTML = "USER WIN"
        //Gewinn auf den Zählerstand packen
        winCountUser += 1;

    } else if (userAuswahl === scissors && compAuswahl === paper) {
        console.log("User Win");
        document.querySelector("#textWin").innerHTML = "USER WIN"
        //Gewinn auf den Zählerstand packen
        winCountUser += 1;

    }
    else if (compAuswahl === rock && userAuswahl === scissors) {
        console.log("Comp Win");
        document.querySelector("#textWin").innerHTML = "COMP WIN"
        //Gewinn auf den Zählerstand packen
        wincountComp += 1;
    }
    else if (compAuswahl === paper && userAuswahl === rock) {
        console.log("Comp Win");
        document.querySelector("#textWin").innerHTML = "COMP WIN"
        //Gewinn auf den Zählerstand packen
        wincountComp += 1;
    }
    else if (compAuswahl === scissors && userAuswahl === paper) {
        console.log("Comp Win");
        document.querySelector("#textWin").innerHTML = "COMP WIN"
        //Gewinn auf den Zählerstand packen
        wincountComp += 1;
    } else {
        console.log("Unentschieden");
        document.querySelector("#textWin").innerHTML = "DRAW"
    }

    //Anzahl der Gewinne ins HTML schreiben
    outputUserWin.innerHTML = winCountUser;
    outputCompWin.innerHTML = wincountComp;
}

// Rundenanzahl der Radiobuttons
function roundsToWin() {
    const fiveChecked = document.querySelector("#five").checked;
    const tenChecked = document.querySelector("#ten").checked;
    const fifteenChecked = document.querySelector("#fifteen").checked;
    const twentyChecked = document.querySelector("#twenty").checked;

    if (fiveChecked) {
        if (amountRounds === 5) {
            getFinalWinner();
            changeStyleAndAnimation();
        }
    }
    if (tenChecked) {
        if (amountRounds === 10) {
            getFinalWinner();
            changeStyleAndAnimation();
        }
    }
    if (fifteenChecked) {
        if (amountRounds === 15) {
            getFinalWinner();
            changeStyleAndAnimation();
        }
    }
    if (twentyChecked) {
        if (amountRounds === 20) {
            getFinalWinner();
            changeStyleAndAnimation();
        }
    }
}

// Bei reset alles zurücksetzen
document.querySelector("#reset").addEventListener("click", () => {
    winCountUser = 0;
    wincountComp = 0;
    amountRounds = 0;
    outputCompWin.innerHTML = 0;
    outputUserWin.innerHTML = 0;
    document.querySelector("#finalWinner").innerHTML = "The Final winner is:";
    document.querySelector("#textWin").innerHTML = ""
    document.querySelector("#buttons").style.display = "flex";
    document.querySelector("#finalWinner").classList.remove("animationWinner");
    document.querySelector("#finalWinner").style.fontSize = "1.5rem";
})

function changeStyleAndAnimation() {
    document.querySelector("#buttons").style.display = "none";
    document.querySelector("#finalWinner").classList.add("animationWinner");
    document.querySelector("#finalWinner").style.fontSize = "3rem";
}

function compChoose() {
    compAuswahl = Math.floor(Math.random() * 3);
    // Hat der COMP nun Stein, Papier oder Schere?
    if (compAuswahl === 0) {
        compAuswahl = rock;
        console.log("Compauswahl ist Stein")
    } else if (compAuswahl === 1) {
        compAuswahl = paper;
        console.log("Compauswahl ist Papier")
    } else {
        compAuswahl = scissors;
        console.log("Compauswahl ist Schere")
    }
}

function getFinalWinner() {
    if (winCountUser > wincountComp) {
        document.querySelector("#finalWinner").innerHTML = "The Final winner is: USER !!!"
    } else if (wincountComp > winCountUser) {
        document.querySelector("#finalWinner").innerHTML = "The Final winner is: COMP !!!"
    } else {
        document.querySelector("#finalWinner").innerHTML = "It's a draw! Good Game !!!"
    }
}