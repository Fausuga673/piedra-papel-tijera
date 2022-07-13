const audio = document.getElementById("audio");

const rock = document.getElementById("control__rock");
const paper = document.getElementById("control__paper");
const scissor = document.getElementById("control__scissor");

const playerImgMove = document.getElementById("player__move");
const enemyImgMove = document.getElementById("enemy__move");

const messege = document.getElementById("messege");

rock.addEventListener("click", function() {
    combat(rock);
})

paper.addEventListener("click", function() {
    combat(paper);
})

scissor.addEventListener("click", function() {
    combat(scissor);
})

function tieMessege() {
    return messege.innerHTML = "Empate.", messege.className = "tieMessege";
}
function loseMessege() {
    return messege.innerHTML = "Perdiste...",  messege.className = "loseMessege";
}

function winMessege() {
    return messege.innerHTML = "¡Tú ganas!", messege.className = "winMessege", audio.innerHTML = '<audio src="sound/rocket.mp3" autoplay></audio>';
}

function combat(move) {

    let enemy = Math.floor(Math.random() * 3 + 1);

    if (enemy == 1) enemy = "rock";
    if (enemy == 2) enemy = "paper";
    if (enemy == 3) enemy = "scissor";
    
    enemyImgMove.src = `img/${enemy}.png`

    if (move == rock) {

        playerImgMove.src=`img/rock.png`;
        
        if (enemy == "rock") tieMessege();
        if (enemy == "paper") loseMessege();
        if (enemy == "scissor") winMessege();
        
    } else if (move == paper) {
        
        playerImgMove.src="img/paper.png";
        
        if (enemy == "rock") winMessege();
        if (enemy == "paper") tieMessege();
        if (enemy == "scissor") loseMessege();
        
    }  else if (move == scissor) {
        
        playerImgMove.src="img/scissor.png";
        
        if (enemy == "rock") loseMessege();
        if (enemy == "paper") winMessege();
        if (enemy == "scissor") tieMessege();

    }

}