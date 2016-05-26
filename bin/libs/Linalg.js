"use strict";
var Linalg;
(function (Linalg) {
    Linalg.add = (v0, v1) => ({
        x: v1.x + v0.x, y: v1.y + v0.y
    });
    Linalg.sub = (v0, v1) => ({
        x: v0.x - v1.x, y: v0.y - v1.y
    });
    Linalg.rotate = (v, r) => ({
        x: v.x * Math.cos(r) - v.y * Math.sin(r),
        y: v.x * Math.sin(r) + v.y * Math.cos(r)
    });
    Linalg.mag = (v) => Math.sqrt(v.x * v.x + v.y * v.y);
    Linalg.dot = (v0, v1) => v0.x * v1.x + v0.y * v1.y;
    Linalg.angle = (v0, v1) => Math.acos(Linalg.dot(v0, v1) / (Linalg.mag(v0) * Linalg.mag(v1)));
    Linalg.scale = (v, s) => ({
        x: v.x * s, y: v.y * s
    });
})(Linalg || (Linalg = {}));
