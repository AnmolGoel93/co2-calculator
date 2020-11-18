function calcDistance(distanceVal) {
    if(distanceVal) {
        if(isNaN(distanceVal)) {
            throw new Error("Unit of Distance is Wrong");
        } else {
            return distanceVal;
        }
    } else {
        throw new Error(`Kindly Specify the distance`);
    }    
}

exports.calcDistance = calcDistance;