/// <reference path="../libs/Linalg.ts" />
importScripts('../libs/Linalg.js');
onmessage = initEvent => {
    console.log("Initializing LogicThread");
    let [PhysicsThread, RenderThread] = initEvent.ports;
    let critters = [
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: -50, y: 0 },
        { x: 0, y: 100 }
    ];
    let food = [];
    RenderThread.postMessage({ critters: critters, food: food });
    PhysicsThread.onmessage = e => {
    };
    RenderThread.onmessage = _ => {
    };
};
