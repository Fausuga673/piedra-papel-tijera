const rock = document.getElementById("control__rock");
const paper = document.getElementById("control__paper");
const scissor = document.getElementById("control__scissor");
const messege = document.getElementById("messege");
const tieMessege = (messege.innerHTML = "Empate.", messege.style.color = "var(--color-white)");

rock.addEventListener("click", function() {
    playerMove(rock);
})

paper.addEventListener("click", function() {
    playerMove(paper);
})

scissor.addEventListener("click", function() {
    playerMove(scissor);
})

function playerMove(move) {

    let enemy = Math.floor(Math.random() * 3 + 1);

    if (move == rock) {

        if (enemy == 1) {console.log(tieMessege);}
        if (enemy == 2) {console.log(messege.innerHTML = "Perdiste..."), messege.style.color = "var(--color-red)";}
        if (enemy == 3) {console.log(messege.innerHTML = "¡Tú ganas!", messege.style.color = "var(--color-green)");}

    } else if (move == paper) {

        if (enemy == 1) {console.log(messege.innerHTML = "¡Tú ganas!", messege.style.color = "var(--color-green)");}
        if (enemy == 2) {console.log(messege.innerHTML = "Empate.", messege.style.color = "var(--color-white)");}
        if (enemy == 3) {console.log(messege.innerHTML = "Perdiste...", messege.style.color = "var(--color-red)");}

    }  else if (move == scissor) {

        if (enemy == 1) {console.log(messege.innerHTML = "Perdiste...", messege.style.color = "var(--color-red)");}
        if (enemy == 2) {console.log(messege.innerHTML = "¡Tú ganas!", messege.style.color = "var(--color-green)");}
        if (enemy == 3) {console.log(messege.innerHTML = "Empate.", messege.style.color = "var(--color-white)");}

    }

}
