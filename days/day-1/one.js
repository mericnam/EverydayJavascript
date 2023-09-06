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
            // W tuşuna basılınca bir class eklemek, bir fonksiyon çağırmak
            break;
        case keyCodes.A:
            break;
        case keyCodes.S:
            break;
        case keyCodes.D:
            break;
        default:
            break;
    }
    keysPressed[keyCode] = true;
});





