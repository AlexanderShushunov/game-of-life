"use strict";
const readline = require("readline");

const HEADER_HEIGHT = 1;
module.exports = function (frameGenerator, frameDelay) {
    let previousFrameHeight = 0;
    let frameNumber = 0;
    setInterval(() => {
        let frame = frameGenerator.next().value;
        if (frameNumber != 0) {
            erasePreviousFrame(previousFrameHeight + HEADER_HEIGHT);
        }
        process.stdout.write(`frame ${frameNumber}\n`);
        process.stdout.write(frame);
        previousFrameHeight = countFrameHeight(frame);
        frameNumber++;
    }, frameDelay);
};

function erasePreviousFrame(height) {
    readline.moveCursor(process.stdout, 0, -height);
    readline.clearScreenDown(process.stdout)
}

function countFrameHeight(frame) {
    return (frame.match(/\n/g) || []).length;
}