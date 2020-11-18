let unitOfDist = ["kg", "g", "gram", "kilogram"];

function getOutputUnit(unitVal) {
    if(unitVal) {
        if(unitOfDist.indexOf(unitVal) > -1) {
            return unitVal;
        } else {
            throw new Error(`Output Unit given by the user is wrong. Kindly input correct input.`);
        }
    }
}

exports.getOutputUnit = getOutputUnit;