var App;
(function (App) {
    function start(e) {
        console.log("hello render thread!");
    }
    App.start = start;
})(App || (App = {}));
