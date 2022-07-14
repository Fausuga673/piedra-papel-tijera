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
    return messege.innerHTML = "Empate.",
    messege.className = "tieMessege",
    audio.innerHTML = '<audio src="sound/tie.mp3" autoplay></audio>';
}
function defeatMessege() {
    return messege.innerHTML = "Perdiste...",  
    messege.className = "defeatMessege",
    audio.innerHTML = '<audio src="sound/defeat.mp3" autoplay></audio>';
}

function victoryMessege() {
    return messege.innerHTML = "¡Tú ganas!", 
    messege.className = "victoryMessege", 
    audio.innerHTML = '<audio src="sound/victory.mp3" autoplay></audio>';
}

function combat(player) {

    let enemy = Math.trunc(Math.random() * 3 + 1);

    if (enemy == 1) enemy = "rock";
    if (enemy == 2) enemy = "paper";
    if (enemy == 3) enemy = "scissor";
    
    enemyImgMove.src = `img/${enemy}.png`

    if (player == rock) {

        playerImgMove.src=`img/rock.png`;
        
        if (enemy == "rock") tieMessege();
        if (enemy == "paper") defeatMessege();
        if (enemy == "scissor") victoryMessege();
        
    } else if (player == paper) {
        
        playerImgMove.src="img/paper.png";
        
        if (enemy == "rock") victoryMessege();
        if (enemy == "paper") tieMessege();
        if (enemy == "scissor") defeatMessege();
        
    }  else if (player == scissor) {
        
        playerImgMove.src="img/scissor.png";
        
        if (enemy == "rock") defeatMessege();
        if (enemy == "paper") victoryMessege();
        if (enemy == "scissor") tieMessege();

    }

}