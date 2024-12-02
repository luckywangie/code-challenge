function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        let overSpeed = speed - speedLimit;
        let demeritPoints = Math.floor(overSpeed / 5);
        
        // Check if the points exceed 12
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}


