/// <reference path="../libs/Linalg.ts" />
module App {
    export function start(canvas: HTMLCanvasElement) {
        let context = canvas.getContext('2d')
        let camera = new Camera(0.1, context)
        renderLoop(context, () => {
            camera.update()
            Graphics.drawSpot(context, { x: 0, y: 0 }, 10, "chartreuse")
        })
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