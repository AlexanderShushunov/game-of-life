"use strict";
const _ = require("lodash");
const {step} = require("./game");
const animate = require("./console-animation");
const populationToString = require("./population-to-string");
const c = (x, y) => ({x, y});

//@formatter:off
let startPopulation = [
               c(-13, 3),
    c(-14, 4), c(-13, 4),c(-12, 4),

    c(-17, 10), c(-16, 10),
    c(-17, 11), c(-16, 11),

             c(1, 0),
    c(0, 1),
    c(0, 2), c(1, 2), c(2, 2)];
//@formatter:on

let fieldDimension = {
    top: -1,
    left: -18,
    width: 24,
    height: 20
};

animate(generateFrames(startPopulation, fieldDimension), 300);

function* generateFrames(population, fieldDimension) {
    while (true) {
        yield populationToString(population, fieldDimension);
        population = step(population);
    }
}
