const keyCodes = {
    W: 87,
    A: 65,
    S: 83,
    D: 68
};

const keysPressed = {};

document.addEventListener('keypress', (event) => {
    const keyCode = event.keyCode;
    switch (keyCode) {
        case keyCodes.W:
            console.log("w")
            break;
        case keyCodes.A:
            console.log("a")
            break;
        case keyCodes.S:
            console.log("s")
            break;
        case keyCodes.D:
            console.log("d")
            break;
        default:
            break;
    }
    keysPressed[keyCode] = true;
});

// function generalChecking(){
    
// }




