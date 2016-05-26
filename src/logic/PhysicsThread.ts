//importScripts('bin/libs/Linalg.js')

onmessage = initEvent => {
    console.log("Initializing PhysicsThread")
    let [LogicThread] = <MessagePort[]>initEvent.ports

    LogicThread.onmessage = e => {

    }
}