let unitOfDist = ["kg", "g", "gram", "kilogram"], unit;

function getOutputUnit(unitVal) {
    if(unitVal) {
        if(unitOfDist.indexOf(unitVal) > -1) {
            if(unitVal === 'g' || unitVal === 'gram') {
                unit = 'g';
            } else {
                unit = 'kg';
            }
        } else {
            throw new Error(`Output Unit given by the user is wrong. Kindly input correct input.`);
        }
    }

    return unit;
}

exports.getOutputUnit = getOutputUnit;