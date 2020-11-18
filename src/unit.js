let unitOfDist = ["kilometer", "km", "meter", "m"], unit = 'km';

function getUnit(unitVal) {
    if(unitVal) {
        if(unitOfDist.indexOf(unitVal) > -1) {
            if(unitVal === 'km' || unitVal === 'kilometer') {
                unit = 'km';
            } else {
                unit = 'm';
            }
        } else {
            throw new Error(`Unit given by the user is wrong. Kindly input correct input.`);
        }
    }

    return unit;
}

exports.getUnit = getUnit;