const adSound = "../day-1/one_img/ADsound.mp3"
const wSound = "../day-1/one_img/Wsound.mp3"
const sSound = "../day-1/one_img/Ssound.mp3"

const wButton = document.getElementById("W")
const sButton = document.getElementById("S")
const aButton = document.getElementById("A")
const dButton = document.getElementById("D")

document.addEventListener('keypress', (event) => {

    if (event.key === "w" || event.key === "W") {
        const inputkey= event.key
        raceFunction(inputkey);
    }else if (event.key === "a" || event.key === "A") {
        const inputkey= event.key
        raceFunction(inputkey);
    }else if (event.key === "s" || event.key === "S") {
        const inputkey= event.key
        raceFunction(inputkey);
    }else if (event.key === "d" || event.key === "D") {
        const inputkey= event.key
        raceFunction(inputkey);
    }else {
        console.log("other keys")
    }

});

let isFunctionActive = true;

function raceFunction(direction) {
    if (isFunctionActive) {
        isFunctionActive = false;
        makeSound(direction);
        makeAnimate(direction);

        setTimeout(() => {
            makeNoAnimate();
            isFunctionActive = true; 
        }, 1000); 
    }
}


function makeSound(direction) {
    let soundFile;
    
    if (direction === "w" || direction === "W") {
        soundFile = wSound;
    } else if (direction === "s" || direction === "S") {
        soundFile = sSound;
    } else {
        soundFile = adSound;
    }

    if (soundFile) {
        playSound(soundFile);
    }
}

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function makeAnimate(direction) {
    
    if (direction === "w" || direction === "W") {
        wButton.classList.toggle("selectedWay")
    } else if (direction === "s" || direction === "S") {
        sButton.classList.toggle("selectedWay")
    } else if (direction === "a" || direction === "A") {
        aButton.classList.toggle("selectedWay")
    } else if (direction === "d" || direction === "D") {
        dButton.classList.toggle("selectedWay")
    } 

}
function makeNoAnimate() {
    wButton.classList.remove("selectedWay")
    sButton.classList.remove("selectedWay")
    aButton.classList.remove("selectedWay")
    dButton.classList.remove("selectedWay")
} 

