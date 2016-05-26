/// <reference path="../libs/Linalg.ts" />
onmessage = initEvent => {
    console.log("Initializing LogicThread");
    let [Psend, Precieve, Rsend, Rrecieve] = initEvent.ports;
    Precieve.onmessage = e => {
    };
    Rrecieve.onmessage = e => {
    };
};
