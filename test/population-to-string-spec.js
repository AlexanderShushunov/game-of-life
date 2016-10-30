"use strict";
const populationToString = require("../src/population-to-string");
const d = (top, left, width, height) => ({top, left, width, height});
const c = (x, y) => ({x, y});

describe("populationToString", function () {
    it("should return empty field if population is empty", function () {
        expect(populationToString([], d(0, 0, 5, 5))).toBe(
            ".....\n" +
            ".....\n" +
            ".....\n" +
            ".....\n" +
            ".....\n"
        )
    });
    it("should return field with stars in position with alive cells", function () {
        expect(populationToString([c(0, 0), c(3, 4), c(4, 4)], d(0, 0, 5, 5))).toBe(
            "*....\n" +
            ".....\n" +
            ".....\n" +
            ".....\n" +
            "...**\n"
        )
    });
    it("should return field with stars only if all cells are alive", function () {
        expect(populationToString([
            c(0, 0), c(1, 0), c(2, 0),
            c(0, 1), c(1, 1), c(2, 1),
            c(0, 2), c(1, 2), c(2, 2)
        ], d(0, 0, 3, 3))).toBe(
            "***\n" +
            "***\n" +
            "***\n"
        )
    });
    it("should ignore alive cells which is out of field dimension ", function () {
        expect(populationToString([
            c(0, 0), c(1, 1), c(2, 2), c(3, 3)
        ], d(0, 0, 3, 3))).toBe(
            "*..\n" +
            ".*.\n" +
            "..*\n"
        )
    });
});
