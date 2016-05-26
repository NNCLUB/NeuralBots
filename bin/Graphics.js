var Graphics;
(function (Graphics) {
    class Camera {
        constructor(speed, context) {
            this.speed = speed;
            this.context = context;
            this.pos = { x: 0, y: 0 };
            this.mousePos = { dx: 0, dy: 0 };
            this.MAX_ZOOM = 12;
            this.MIN_ZOOM = 0.5;
            this.isMoving = false;
            this.zoom = 1;
            context.canvas.onmousewheel = e => {
                let minZoom = this.zoom > this.MIN_ZOOM || e.wheelDelta > 0;
                let maxZoom = this.zoom < this.MAX_ZOOM || e.wheelDelta < 0;
                if (minZoom && maxZoom)
                    this.zoom *= 1 + this.speed * e.wheelDelta / 120;
            };
            context.canvas.onclick = e => {
                if (e.button === 1) {
                    if (this.isMoving) {
                        this.mousePos.dx = 0;
                        this.mousePos.dy = 0;
                        this.isMoving = false;
                    }
                    else
                        this.isMoving = true;
                }
            };
            context.canvas.onmousemove = e => {
                if (this.isMoving) {
                    this.mousePos.dx += e.movementX / this.zoom * this.speed;
                    this.mousePos.dy -= e.movementY / this.zoom * this.speed;
                }
            };
        }
        transform({ dx, dy }) {
            this.pos.x += this.mousePos.dx + dx;
            this.pos.y += this.mousePos.dy + dy;
            this.context.translate(this.context.canvas.width / 2, this.context.canvas.height / 2);
            this.context.scale(1, -1);
            this.context.scale(this.zoom, this.zoom);
            this.context.translate(-this.pos.x, -this.pos.y);
        }
    }
    Graphics.Camera = Camera;
})(Graphics || (Graphics = {}));
