module App {
    export function start(canvas:HTMLCanvasElement) {
        renderLoop(canvas.getContext("2d"), () => {
            //console.log("tjosan")
        })
    }
    
    function renderLoop(context:CanvasRenderingContext2D, f:() => void) {
        let clearScreen = () => {
            context.restore()
            context.clearRect(0, 0, context.canvas.width, context.canvas.height)
            context.save()
        }
        
        function rec() {
            clearScreen()
            f()
            window.requestAnimationFrame(rec)
        }
        rec()
    }
}
