const assert = require('assert');
const Distance = require('./../src/distance');

describe('Distance Unit Tests', () => {

    it('Should return correct distance value', () => {
        assert.equal(Distance.calcDistance(1500), 1500);
    });

    it('Should throw an error for wrong value', () => {
        assert.equal(Distance.calcDistance('290'), 290);
    });

    it('Should throw an error for wrong value', () => {
        assert.throws(function () { Distance.calcDistance('abc23') }, Error, "Unit of Distance is Wrong");
    });

    it('Should throw an error for missing distance parameter', () => {
        assert.throws(function () { Distance.calcDistance() }, Error, "Kindly Specify the distance");
    });
});