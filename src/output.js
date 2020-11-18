const TransportationMethod = require('./transportationMethod');
const OutputUnit = require('./outputUnit');
const Equivalent = require('./equivalent');
const Distance = require('./distance');
const Unit = require('./unit');

function getCo2Equivalent(arguments) {
    let transMthdVal = TransportationMethod.getTransportationMethod(arguments["transportation-method"]);
    
    let distance = Distance.calcDistance(arguments["distance"]);
    
    let unit = Unit.getUnit(arguments["unit-of-distance"]);
    
    let outputUnit = OutputUnit.getOutputUnit(arguments["output"]);
    
    let equivalent = Equivalent.getEquivalent(distance, transMthdVal, unit, outputUnit);
    return equivalent;
}

exports.getCo2Equivalent = getCo2Equivalent;
