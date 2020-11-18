const assert = require('assert');
const Unit = require('./../src/unit');

describe('Unit of Distance Tests', () => {

    it('Should return km', () => {
        assert.equal(Unit.getUnit(), 'km');
    });

    it('Should return km', () => {
        assert.equal(Unit.getUnit('km'), 'km');
    });

    it('Should return km', () => {
        assert.equal(Unit.getUnit('kilometer'), 'km');
    });

    it('Should return m', () => {
        assert.equal(Unit.getUnit('m'), 'm');
    });

    it('Should return m', () => {
        assert.equal(Unit.getUnit('meter'), 'm');
    });

    it('Should throw an error', () => {
        assert.throws(function () { Unit.getUnit('kg') }, Error, "Unit given by the user is wrong. Kindly input correct input.");
    });
});