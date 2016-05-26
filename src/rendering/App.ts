"use strict"
module App {
    export function start(canvas: HTMLCanvasElement) {
        renderLoop(canvas.getContext("2d"), () => {
            //console.log("tjosan")
            
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
