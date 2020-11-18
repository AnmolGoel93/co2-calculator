function getEquiVal(distanceInKM, transMthdVal, distanceUnit) {
    let equivalent = distanceInKM * transMthdVal;
    
    if(distanceUnit === 'kg') {
        equivalent = equivalent / 1000;
        equivalent = equivalent.toFixed(1);
    }

    return equivalent;
}

function getDistanceUnit(unit, outputUnit) {
    if(outputUnit) {
        distanceUnit = outputUnit;
    } else {
        if(unit === "km" || unit === "kilometer") {
            distanceUnit = 'kg';
        } else {
            distanceUnit = 'g';
        }
    }

    return distanceUnit;
}

function getdistanceInKM(distance, unit) {
    if(unit === "m" || unit === "meter") {
        return distance / 1000;
    } else {
        return distance;
    }
}

function getEquivalent(distance, transMthdVal, unit, outputUnit) {
    let distanceUnit = getDistanceUnit(unit, outputUnit);

    let distanceInKM = getdistanceInKM(distance, unit);

    let equivalent = getEquiVal(distanceInKM, transMthdVal, distanceUnit);

    return (equivalent + distanceUnit);
}

exports.getEquivalent = getEquivalent; 