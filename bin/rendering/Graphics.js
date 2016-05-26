var Graphics;
(function (Graphics) {
    function drawSpot(ctx, { x, y }, r, c) {
        ctx.fillStyle = c;
        ctx.strokeStyle = "darkslategray";
        ctx.lineWidth = r / 4;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    Graphics.drawSpot = drawSpot;
})(Graphics || (Graphics = {}));
