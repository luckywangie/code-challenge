const readline = require('readline');

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

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for speed input
rl.question('Enter your speed: ', (answer) => {
    const userSpeed = parseInt(answer);
    speedDetector(userSpeed);
    rl.close();
});