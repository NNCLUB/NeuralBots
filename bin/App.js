var App;
(function (App) {
    function start(canvas) {
        renderLoop(canvas.getContext("2d"), () => {
            //console.log("tjosan")
        });
    }
    App.start = start;
    function renderLoop(context, f) {
        let clearScreen = () => {
            context.restore();
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.save();
        };
        function rec() {
            clearScreen();
            f();
            window.requestAnimationFrame(rec);
        }
        rec();
    }
})(App || (App = {}));
