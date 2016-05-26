/// <reference path="../libs/Linalg.ts" />
//importScripts('bin/libs/Linalg.js')
onmessage = initEvent => {
    console.log("Initializing LogicThread");
    let [PhysicsThread, RenderThread] = initEvent.ports;
    PhysicsThread.onmessage = e => {
    };
    RenderThread.onmessage = e => {
    };
};
