const assert = require('assert');
const OutputUnit = require('./../src/outputUnit');

describe('Output Unit Tests', () => {

    it('Should return undefined', () => {
        assert.equal(OutputUnit.getOutputUnit(), undefined);
    });

    it('Should return kg', () => {
        assert.equal(OutputUnit.getOutputUnit('kg'), 'kg');
    });

    it('Should return kg', () => {
        assert.equal(OutputUnit.getOutputUnit('kilogram'), 'kg');
    });

    it('Should return g', () => {
        assert.equal(OutputUnit.getOutputUnit('g'), 'g');
    });

    it('Should return g', () => {
        assert.equal(OutputUnit.getOutputUnit('gram'), 'g');
    });

    it('Should throw an error', () => {
        assert.throws(function () { OutputUnit.getOutputUnit('km') }, Error, "Output Unit given by the user is wrong. Kindly input correct input.");
    });
});