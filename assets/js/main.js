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
        //Gewinn auf den Zählerstand packen
        winCountUser += 1;


    } else if (compAuswahl === 0 && userAuswahl === 2) {
        console.log("COMP Win");
        wincountComp += 1;

    } else if (compAuswahl === 0 && userAuswahl === 0) {
        console.log("Unentschieden");

    }


    if (compAuswahl === 1 && userAuswahl === 1) {
        console.log("Unentschieden");


    } else if (compAuswahl === 1 && userAuswahl === 2) {
        console.log("COMP Loose");
        winCountUser += 1;


    } else if (compAuswahl === 1 && userAuswahl === 0) {
        console.log("COMP Win");
        wincountComp += 1;

    }

    if (compAuswahl === 2 && userAuswahl === 1) {
        console.log("COMP Win");
        wincountComp += 1;

    } else if (compAuswahl === 2 && userAuswahl === 2) {
        console.log("Unentschieden");


    } else if (compAuswahl === 2 && userAuswahl === 0) {
        console.log("COMP Loose");
        winCountUser += 1;
    }

    outputUserWin.innerHTML = winCountUser;
    outputCompWin.innerHTML = wincountComp;
}

// Bei reset
document.querySelector("#reset").addEventListener("click", () => {
    winCountUser = 0;
    wincountComp = 0;
    outputCompWin.innerHTML = 0;
    outputUserWin.innerHTML = 0;
    document.querySelector("h2").innerHTML = "The Final winner is:";
})




const roundsToWin = () => {
    const fiveChecked = document.querySelector("#five").checked;
    const tenChecked = document.querySelector("#ten").checked;
    const fifteenChecked = document.querySelector("#fifteen").checked;
    const twentyChecked = document.querySelector("#twenty").checked;

    if (fiveChecked) {

        if (winCountUser === 5) {
            document.querySelector("h2").innerHTML = "The Final winner is: USER!!!"
            return;
        }

        if (wincountComp === 5) {
            document.querySelector("h2").innerHTML = "The Final winner is: COMP!!!"
            return;
        }
    }

    if (tenChecked) {
        if (winCountUser === 10) {
            document.querySelector("h2").innerHTML = "The Final winner is: USER!!!"
            return;
        }

        if (wincountComp === 10) {
            document.querySelector("h2").innerHTML = "The Final winner is: COMP!!!"
            return;
        }
    }

    if (fifteenChecked) {
        if (winCountUser === 15) {
            document.querySelector("h2").innerHTML = "The Final winner is: USER!!!"
            return;
        }

        if (wincountComp === 15) {
            document.querySelector("h2").innerHTML = "The Final winner is: COMP!!!"
            return;
        }
    }

    if (twentyChecked) {
        if (winCountUser === 20) {
            document.querySelector("h2").innerHTML = "The Final winner is: USER!!!"
            return;
        }

        if (wincountComp === 20) {
            document.querySelector("h2").innerHTML = "The Final winner is: COMP!!!"
            return;
        }
    }
}