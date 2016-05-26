/// <reference path="../libs/Linalg.ts" />
importScripts('../libs/Linalg.js')

onmessage = initEvent => {
    console.log("Initializing LogicThread")
    let [PhysicsThread, RenderThread] = <MessagePort[]>initEvent.ports

    let critters: Linalg.IVec2[] = [
        { x: 0, y: 0 },
        { x: 100, y: 0 },
        { x: -50, y: 0 },
        { x: 0, y: 100 }
    ]
    let food: Linalg.IVec2[] = []
    RenderThread.postMessage({ critters, food })

    PhysicsThread.onmessage = e => {

    }
    
    RenderThread.onmessage = _ => {

    }
}
