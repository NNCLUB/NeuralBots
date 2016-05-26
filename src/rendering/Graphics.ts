module Graphics {
    export function drawSpot(ctx: CanvasRenderingContext2D, {x, y}: Linalg.IVec2, r: number, c: string) {
        ctx.fillStyle = c
        ctx.strokeStyle = "darkslategray"
        ctx.lineWidth = r / 4

        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.stroke()
        ctx.fill()
    }
}