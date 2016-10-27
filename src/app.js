"use strict";
const _ = require("lodash");
const {step} = require("./game");
const {c} = require("./helpers");
const animate = require("./console-animation");

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
        yield printGame(population, fieldDimension);
        population = step(population);
    }
}



function printGame(population, fieldDimension) {
    let result = "";


    _.times(fieldDimension.height, printRow);

    function printRow(rowNumber) {
        _.times(fieldDimension.width, _.partial(printCell, rowNumber));
        result += "\n";
    }

    function printCell(yOffset, xOffset) {
        let cell = {
            x: fieldDimension.left + xOffset,
            y: fieldDimension.top + yOffset
        };
        result += cellSign(cell);
    }

    function cellSign(cell) {
        return population.some(_.partial(_.isEqual, cell)) ? "*" : ".";
    }

    return result;
}
