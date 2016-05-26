/// <reference path="../libs/Linalg.ts" />
var App;
(function (App) {
    function start(canvas) {
        let context = canvas.getContext('2d');
        let camera = new Camera(0.1, context);
        renderLoop(context, () => {
            camera.update();
            Graphics.drawSpot(context, { x: 0, y: 0 }, 10, "chartreuse");
        });
    }
    App.start = start;
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
