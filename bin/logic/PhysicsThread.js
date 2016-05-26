onmessage = initEvent => {
    console.log("Initializing PhysicsThread");
    let [Lsend, Lrecieve] = initEvent.ports;
    Lrecieve.onmessage = e => {
    };
};
