/// <reference path="../libs/Linalg.ts" />
/// <reference path="../libs/ChannelWrapper.ts" />
var App;
(function (App) {
    function start(canvas) {
        let logicPorts = setupThreads();
        let context = canvas.getContext('2d');
        let camera = new Camera(0.1, context);
        renderLoop(context, () => {
            camera.update();
            Graphics.drawSpot(context, { x: 0, y: 0 }, 10, "chartreuse");
        });
    }
    App.start = start;
    function setupThreads() {
        let LogicThread = new Worker('bin/logic/LogicThread.js');
        let PhysicsThread = new Worker('bin/logic/PhysicsThread.js');
        let L2PChannel = ChannelWrapper.GenChannel();
        let P2LChannel = ChannelWrapper.GenChannel();
        let R2LChannel = ChannelWrapper.GenChannel();
        let L2RChannel = ChannelWrapper.GenChannel();
        LogicThread.postMessage(null, [L2PChannel.send, P2LChannel.recieve, L2RChannel.send, R2LChannel.recieve]);
        PhysicsThread.postMessage(null, [P2LChannel.send, L2PChannel.recieve]);
        return { send: R2LChannel.send, recieve: L2RChannel.recieve };
    }
    function clearScreen(context) {
        context.restore();
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.save();
    }
    function renderLoop(context, f) {
        function rec() {
            clearScreen(context);
            f();
            window.requestAnimationFrame(rec);
        }
        rec();
    }
})(App || (App = {}));
