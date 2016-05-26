"use strict";
var App;
(function (App) {
    function start(canvas) {
        renderLoop(canvas.getContext("2d"), () => {
            //console.log("tjosan")
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
