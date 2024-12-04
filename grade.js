const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get the student's grade based on their marks
function getStudentGrade() {
    // Prompt the user to input the student's marks
    rl.question("Enter student marks (0 - 100): ", (input) => {
        let marks = parseInt(input);

        // Check if the input is valid (a number between 0 and 100)
        if (marks >= 0 && marks <= 100) {
            // Determine the grade based on the mark ranges
            if (marks >= 80) {
                console.log("Grade: A");
            } else if (marks >= 60) {
                console.log("Grade: B");
            } else if (marks >= 50) {
                console.log("Grade: C");
            } else if (marks >= 40) {
                console.log("Grade: D");
            } else {
                console.log("Grade: E");
            }
        } else {
            console.log("Please enter a valid mark between 0 and 100.");
        }

        // Close the readline interface
        rl.close();
    });
}

// Call the function to get the grade
getStudentGrade();
