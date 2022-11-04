// Buttons geholt
const steinButton = document.querySelector("#stein");
const papierButton = document.querySelector("#papier");
const schereButton = document.querySelector("#schere");
// Output geholt
const outputUserWin = document.querySelector("#userWin");
const outputCompWin = document.querySelector("#compWin");

//COMP Zufall zwischen 0-2
const compAuswahl = Math.floor(Math.random() * 3);
console.log(compAuswahl);

// Hat der COMP nun Stein, Papier oder Schere?
if (compAuswahl === 0) {
    console.log("Compauswahl ist Stein")
} else if (compAuswahl === 1) {
    console.log("Compauswahl ist Papier")
} else {
    console.log("Compauswahl ist Schere")
}


let userAuswahl;
//Beim click soll der Wert in die Variable gepeichert werden
steinButton.addEventListener("click", () => {
    userAuswahl = 0;
    console.log('Userauswahl ist Stein');
    whoWin();
    roundsToWin();
})

papierButton.addEventListener("click", () => {
    userAuswahl = 1;
    console.log('Userauswahl ist Papier');
    whoWin();
    roundsToWin();
})

schereButton.addEventListener("click", () => {
    userAuswahl = 2;
    console.log('Userauswahl ist Schere');
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
        console.log(`Wincount User: ${winCountUser}`);
        console.log(`wincount COMP: ${wincountComp}`);
        return;

    } else if (compAuswahl === 0 && userAuswahl === 2) {
        console.log("COMP Win");
        wincountComp += 1;
        console.log(`Wincount User: ${winCountUser}`);
        console.log(`wincount COMP: ${wincountComp}`);
        return

    } else if (compAuswahl === 0 && userAuswahl === 0) {
        console.log("Unentschieden");
        return;
    }


    if (compAuswahl === 1 && userAuswahl === 1) {
        console.log("Unentschieden");
        return;

    } else if (compAuswahl === 1 && userAuswahl === 2) {
        console.log("COMP Loose");
        winCountUser += 1;
        console.log(`Wincount User: ${winCountUser}`);
        console.log(`wincount COMP: ${wincountComp}`);
        return

    } else if (compAuswahl === 1 && userAuswahl === 0) {
        console.log("COMP Win");
        wincountComp += 1;
        console.log(`Wincount User: ${winCountUser}`);
        console.log(`wincount COMP: ${wincountComp}`);
        return;
    }

    if (compAuswahl === 2 && userAuswahl === 1) {
        console.log("COMP Win");
        wincountComp += 1;
        console.log(`Wincount User: ${winCountUser}`);
        console.log(`wincount COMP: ${wincountComp}`);
        return;

    } else if (compAuswahl === 2 && userAuswahl === 2) {
        console.log("Unentschieden");
        console.log(`Wincount User: ${winCountUser}`);
        console.log(`wincount COMP: ${wincountComp}`);
        return

    } else if (compAuswahl === 2 && userAuswahl === 0) {
        console.log("COMP Loose");
        winCountUser += 1;
        return;
    }

}
//Ausrechnen wer nun Final Gewonnen hat
// const finalwin5 = () => {

//     if (winCountUser === 5) {
//         console.log("FINAL WINNER: USER");
//         return;
//     }

//     if (wincountComp === 5) {
//         console.log("FINAL WINNER: COMP");
//         return;
//     }
// }

document.querySelector("#reset").addEventListener("click", () => {
    winCountUser = 0;
    wincountComp = 0;
})




const roundsToWin = () => {

    const fiveChecked = document.querySelector("#five").checked;
    const tenChecked = document.querySelector("#ten").checked;
    const fifteenChecked = document.querySelector("#fifteen").checked;
    const twentyChecked = document.querySelector("#twenty").checked;

    if (fiveChecked) {

        if (winCountUser === 5) {
            console.log("FINAL WINNER: USER");
            return;
        }

        if (wincountComp === 5) {
            console.log("FINAL WINNER: COMP");
            return;
        }
    }

    if (tenChecked) {
        if (winCountUser === 10) {
            console.log("FINAL WINNER: USER");
            return;
        }

        if (wincountComp === 10) {
            console.log("FINAL WINNER: COMP");
            return;
        }
    }

    if (fifteenChecked) {
        if (winCountUser === 15) {
            console.log("FINAL WINNER: USER");
            return;
        }

        if (wincountComp === 15) {
            console.log("FINAL WINNER: COMP");
            return;
        }
    }

    if (twentyChecked) {
        if (winCountUser === 20) {
            console.log("FINAL WINNER: USER");
            return;
        }

        if (wincountComp === 20) {
            console.log("FINAL WINNER: COMP");
            return;
        }
    }
}