const rock = document.getElementById("control__rock");
const paper = document.getElementById("control__paper");
const scissor = document.getElementById("control__scissor");
const messege = document.getElementById("messege");

rock.addEventListener("click", function() {
    playerMove(rock);
})

paper.addEventListener("click", function() {
    playerMove(paper);
})

scissor.addEventListener("click", function() {
    playerMove(scissor);
})

function tieMessege() {
    return messege.innerHTML = "Empate.", messege.className = "tieMessege";
}
function loseMessege() {
    return messege.innerHTML = "Perdiste...",  messege.className = "loseMessege";
}

function winMessege() {
    return messege.innerHTML = "¡Tú ganas!", messege.className = "winMessege";
}

function playerMove(move) {

    let enemy = Math.floor(Math.random() * 3 + 1);

    if (move == rock) {

        if (enemy == 1) {tieMessege();}
        if (enemy == 2) {loseMessege();}
        if (enemy == 3) {winMessege();}

    } else if (move == paper) {

        if (enemy == 1) {winMessege();}
        if (enemy == 2) {tieMessege();}
        if (enemy == 3) {loseMessege();}

    }  else if (move == scissor) {

        if (enemy == 1) {loseMessege();}
        if (enemy == 2) {winMessege();}
        if (enemy == 3) {tieMessege();}

    }

}