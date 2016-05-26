onmessage = initEvent => {
    console.log("Initializing PhysicsThread")
    let [Lsend, Lrecieve] = <MessagePort[]>initEvent.ports
    
    Lrecieve.onmessage = e => {
        
    }
}