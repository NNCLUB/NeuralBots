"use strict"
module Linalg {
    export interface IVec2 {
        x: number
        y: number
    }

    export let add = (v0: IVec2, v1: IVec2): IVec2 => ({
        x: v1.x + v0.x, y: v1.y + v0.y
    })

    export let sub = (v0: IVec2, v1: IVec2): IVec2 => ({
        x: v0.x - v1.x, y: v0.y - v1.y
    })

    export let rotate = (v: IVec2, r: number): IVec2 => ({
        x: v.x * Math.cos(r) - v.y * Math.sin(r),
        y: v.x * Math.sin(r) + v.y * Math.cos(r)
    })

    export let mag = (v: IVec2) =>
        Math.sqrt(v.x * v.x + v.y * v.y)

    export let dot = (v0: IVec2, v1: IVec2) =>
        v0.x * v1.x + v0.y * v1.y

    export let angle = (v0: IVec2, v1: IVec2) =>
        Math.acos(dot(v0, v1) / (mag(v0) * mag(v1)))

    export let scale = (v: IVec2, s: number): IVec2 => ({
        x: v.x * s, y: v.y * s
    })
}