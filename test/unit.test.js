const assert = require('assert');
const Unit = require('./../src/unit');

describe('Unit Tests', () => {

    it('Should Return Given Unit', () => {
        assert.equal(Unit.getUnit('km'), 'km');
    });
});