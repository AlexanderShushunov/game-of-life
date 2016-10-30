"use strict";
const _ = require("lodash");

module.exports = function (population, fieldDimension) {
    return _.range(fieldDimension.top, fieldDimension.top + fieldDimension.height)
        .map(() => _.range(fieldDimension.left, fieldDimension.left + fieldDimension.width))
        .map(rowToString)
        .join("\n");

    function rowToString(columnIndexes, rowIndex) {
        return columnIndexes
            .map(columnIndex => cellSign(columnIndex, rowIndex))
            .join("");
    }

    function cellSign(x, y) {
        return population.some(_.partial(_.isEqual, {x, y})) ? "*" : ".";
    }
};