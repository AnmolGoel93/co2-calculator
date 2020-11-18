const assert = require('assert');
const TransportationMethod = require('./../src/transportationMethod');

describe('Transportation Method Unit Tests', () => {

    it('Should return correct value', () => {
        assert.equal(TransportationMethod.getTransportationMethod("small-diesel-car"), '142');
    });

    it('Should return correct value', () => {
        assert.equal(TransportationMethod.getTransportationMethod("train"), '6');
    });

    it('Should throw an error for wrong value', () => {
        assert.throws(function () { TransportationMethod.getTransportationMethod("plane") }, Error, "Transportation Method defined is Wrong. Value should be among these values: small-diesel-car,small-petrol-car,small-plugin-hybrid-car,small-electric-car,medium-diesel-car,medium-petrol-car,medium-plugin-hybrid-car,medium-electric-car,large-diesel-car,large-petrol-car,large-plugin-hybrid-car,large-electric-car,bus,train");
    });

    it('Should throw an error for no value', () => {
        assert.throws(function () { TransportationMethod.getTransportationMethod() }, Error, "Kindly Specify Transportation Method. It should be among these values : small-diesel-car,small-petrol-car,small-plugin-hybrid-car,small-electric-car,medium-diesel-car,medium-petrol-car,medium-plugin-hybrid-car,medium-electric-car,large-diesel-car,large-petrol-car,large-plugin-hybrid-car,large-electric-car,bus,train");
    });
});