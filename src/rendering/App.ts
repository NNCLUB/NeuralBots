/// <reference path="../libs/Linalg.ts" />
module App {
    export function start(canvas: HTMLCanvasElement) {
        let logicThread = setupThreads()

        let context = canvas.getContext('2d')
        let camera = new Camera(0.1, context)
        renderLoop(context, () => {
            camera.update()
            Graphics.drawSpot(context, { x: 0, y: 0 }, 10, "chartreuse")
        })
    }

    function setupThreads() {
        let LogicThread = new Worker('bin/logic/LogicThread.js')
        let PhysicsThread = new Worker('bin/logic/PhysicsThread.js')
        let LogicPhysicsChannel = new MessageChannel()
        let LogicRenderChannel = new MessageChannel()
        LogicThread.postMessage(null, [LogicPhysicsChannel.port1, LogicRenderChannel.port2])
        PhysicsThread.postMessage(null, [LogicPhysicsChannel.port2])
        return LogicRenderChannel.port1
    }

    function clearScreen(context: CanvasRenderingContext2D) {
        context.restore()
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.save()
    }

    function renderLoop(context: CanvasRenderingContext2D, f: () => void) {
        function rec() {
            clearScreen(context)
            f()
            window.requestAnimationFrame(rec)
        }
        rec()
    }
}