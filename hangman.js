const letter = document.querySelectorAll(".letter")
const letters = document.querySelector(".letters")
const image = document.querySelector(".img")
const words = ["life" , "light" , "god" , "human" , "angel" , "crystal"]
const p = document.querySelector("#display")
const h3 = document.querySelector(".h3")
const nextButon= document.querySelector(".next")

let randomItem=""
let clicked =[]
let result=""
let mistakes = 0;


nextButon.addEventListener("click", nextHandler)
function selectRandomItem(){
    let randomNumber = Math.round(Math.random()*words.length)
    randomItem=words[randomNumber-1]
    letter.forEach(item => item.addEventListener("click" , buttonHandler))
    window.addEventListener("keydown" , keyListener)
}
function setUnderScores() {
    let splitedWord = randomItem.split("");
    let mappedWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
     result = mappedWord.join("")
    p.innerHTML = result;
}
function checkIfWon() {
    if (randomItem === result){
        h3.style.display = "flex"
        image.src = `/images/winner.png`
        letters.style.display = "none"
    }
}
function ckeckIfLost(){
    if (mistakes === 6) {
        h3.style.display= "flex"
        p.innerHTML = randomItem;
        letters.style.display = "none"
    }
   
}
function updateHangmanPicture() {
     switch (mistakes){
        case 1:
            image.src = `/images/hangman${mistakes}.png`
            break;
        case 2:
            image.src = `/images/hangman${mistakes}.png`
            break;
        case 3:
            image.src = `/images/hangman${mistakes}.png`
            break;
        case 4:
            image.src = `/images/hangman${mistakes}.png`
            break;
        case 5:
            image.src = `/images/hangman${mistakes}.png`
            break;
        case 6 : 
        image.src = `/images/hangman${mistakes}.png`
        
            break;
        default:
            break;
    }
}
function letterHandler(letter) {
    console.log(letter);
    clicked.indexOf(letter)=== -1 ? clicked.push(letter) : null;
    document.getElementById(letter).classList = "used"
    document.getElementById(letter).disabled = true;
    if (randomItem.indexOf(letter)>=0) {
        setUnderScores()
        checkIfWon()
        console.log(result);
        console.log(randomItem);
    }else if (randomItem.indexOf(letter)===-1){
        mistakes++;
       ckeckIfLost();
       updateHangmanPicture();
    }
}


function buttonHandler(event){
    letterHandler(event.target.id)
    event.target.removeEventListener("click" , buttonHandler )
}
function keyListener(event){
    letterHandler(event.key)
}
function nextHandler(){
    location.reload;
}

    

selectRandomItem()
setUnderScores()
