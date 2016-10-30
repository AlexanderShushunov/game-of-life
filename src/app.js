"use strict";
const _ = require("lodash");
const {step} = require("./game");
const animate = require("./console-animation");
const populationToString = require("./population-to-string");
const c = (x, y) => ({x, y});

let startPopulation = [
            c(1, 0),
    c(0, 1),
    c(0, 2), c(1, 2), c(2, 2)];

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
