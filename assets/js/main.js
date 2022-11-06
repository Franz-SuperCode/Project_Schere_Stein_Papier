// Buttons geholt
const steinButton = document.querySelector("#stein");
const papierButton = document.querySelector("#papier");
const schereButton = document.querySelector("#schere");
// Output geholt
let outputUserWin = document.querySelector("#userWin");
let outputCompWin = document.querySelector("#compWin");

//Variablen für User/COMP Auswahl (Stein, Papier oder Schere)
let compAuswahl;
let userAuswahl;
let amountRounds = 0;


steinButton.addEventListener("click", () => {
    //Beim click soll der Wert in die Variable gepeichert werden
    userAuswahl = 0;
    console.log('Userauswahl ist Stein');

    //COMP Zufall zwischen 0-2
    compAuswahl = Math.floor(Math.random() * 3);
    console.log(compAuswahl);

    // Hat der COMP nun Stein, Papier oder Schere?
    if (compAuswahl === 0) {
        console.log("Compauswahl ist Stein")
    } else if (compAuswahl === 1) {
        console.log("Compauswahl ist Papier")
    } else {
        console.log("Compauswahl ist Schere")
    }
    amountRounds++;
    whoWin();
    roundsToWin();

})

papierButton.addEventListener("click", () => {
    userAuswahl = 1;
    console.log('Userauswahl ist Papier');

    compAuswahl = Math.floor(Math.random() * 3);
    console.log(compAuswahl);

    // Hat der COMP nun Stein, Papier oder Schere?
    if (compAuswahl === 0) {
        console.log("Compauswahl ist Stein")
    } else if (compAuswahl === 1) {
        console.log("Compauswahl ist Papier")
    } else {
        console.log("Compauswahl ist Schere")
    }
    amountRounds++;
    whoWin();
    roundsToWin();
})

schereButton.addEventListener("click", () => {
    userAuswahl = 2;
    console.log('Userauswahl ist Schere');

    compAuswahl = Math.floor(Math.random() * 3);
    console.log(compAuswahl);

    // Hat der COMP nun Stein, Papier oder Schere?
    if (compAuswahl === 0) {
        console.log("Compauswahl ist Stein")
    } else if (compAuswahl === 1) {
        console.log("Compauswahl ist Papier")
    } else {
        console.log("Compauswahl ist Schere")
    }
    amountRounds++;
    whoWin();
    roundsToWin();
})

//Zähler wer wie oft gewonnen hat
let wincountComp = 0;
let winCountUser = 0;

//Funktion wann wer gewinnt
const whoWin = () => {
    if (compAuswahl === 0 && userAuswahl === 1) {
        console.log("COMP Loose");
        document.querySelector("#textWin").innerHTML = "USER WIN"
        //Gewinn auf den Zählerstand packen
        winCountUser += 1;


    } else if (compAuswahl === 0 && userAuswahl === 2) {
        console.log("COMP Win");
        document.querySelector("#textWin").innerHTML = "USER LOOSE"
        wincountComp += 1;

    } else if (compAuswahl === 0 && userAuswahl === 0) {
        console.log("Unentschieden");
        document.querySelector("#textWin").innerHTML = "DRAW"
    }


    if (compAuswahl === 1 && userAuswahl === 1) {
        console.log("Unentschieden");
        document.querySelector("#textWin").innerHTML = "DRAW"


    } else if (compAuswahl === 1 && userAuswahl === 2) {
        console.log("COMP Loose");
        document.querySelector("#textWin").innerHTML = "USER WIN"
        winCountUser += 1;


    } else if (compAuswahl === 1 && userAuswahl === 0) {
        console.log("COMP Win");
        document.querySelector("#textWin").innerHTML = "USER LOOSE";
        wincountComp += 1;
    }

    if (compAuswahl === 2 && userAuswahl === 1) {
        console.log("COMP Win");
        document.querySelector("#textWin").innerHTML = "USER LOOSE"
        wincountComp += 1;

    } else if (compAuswahl === 2 && userAuswahl === 2) {
        console.log("Unentschieden");
        document.querySelector("#textWin").innerHTML = "DRAW"


    } else if (compAuswahl === 2 && userAuswahl === 0) {
        console.log("COMP Loose");
        document.querySelector("#textWin").innerHTML = "USER WIN"
        winCountUser += 1;
    }

    outputUserWin.innerHTML = winCountUser;
    outputCompWin.innerHTML = wincountComp;
}



const roundsToWin = () => {
    const fiveChecked = document.querySelector("#five").checked;
    const tenChecked = document.querySelector("#ten").checked;
    const fifteenChecked = document.querySelector("#fifteen").checked;
    const twentyChecked = document.querySelector("#twenty").checked;

    if (fiveChecked) {
        if (amountRounds === 5) {
            if (winCountUser > wincountComp) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: USER!!!"
            }

            if (wincountComp > winCountUser) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: COMP!!!"

            }
            document.querySelector("#buttons").style.display = "none";
            document.querySelector("#finalWinner").classList.add("animationWinner");
            document.querySelector("#finalWinner").style.fontSize = "3rem";
        }
    }
    if (tenChecked) {
        if (amountRounds === 10) {
            if (winCountUser > wincountComp) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: USER!!!"

            }

            if (wincountComp > winCountUser) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: COMP!!!"

            }
            document.querySelector("#buttons").style.display = "none";
            document.querySelector("#finalWinner").classList.add("animationWinner");
            document.querySelector("#finalWinner").style.fontSize = "3rem";
        }
    }
    if (fifteenChecked) {
        if (amountRounds === 15) {
            if (winCountUser > wincountComp) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: USER!!!"
            }

            if (wincountComp > winCountUser) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: COMP!!!"
            }
            document.querySelector("#buttons").style.display = "none";
            document.querySelector("#finalWinner").classList.add("animationWinner");
            document.querySelector("#finalWinner").style.fontSize = "3rem";
        }
    }
    if (twentyChecked) {
        if (amountRounds === 20) {
            if (winCountUser > wincountComp) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: USER!!!"
            }

            if (wincountComp > winCountUser) {
                document.querySelector("#finalWinner").innerHTML = "The Final winner is: COMP!!!"
            }
            document.querySelector("#buttons").style.display = "none";
            document.querySelector("#finalWinner").classList.add("animationWinner");
            document.querySelector("#finalWinner").style.fontSize = "3rem";
        }
    }
}

// Bei reset
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
