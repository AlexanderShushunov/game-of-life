"use strict";
const _ = require("lodash");

module.exports = function (population, fieldDimension) {
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