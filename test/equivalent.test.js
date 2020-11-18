const assert = require('assert');
const Equivalent = require('./../src/equivalent');

describe('Equivalent Value Unit Tests', () => {

    it('Should return distance in km', () => {
        assert.equal(Equivalent.getEquivalent(15, '171', 'km'), '2.6kg');
    });

    it('Should return distance in km', () => {
        assert.equal(Equivalent.getEquivalent(14500, '6', 'm'), '87g');
    });

    it('Should return distance unit', () => {
        assert.equal(Equivalent.getEquivalent(14500, '6', 'm', 'kg'), '0.1kg');
    });
});