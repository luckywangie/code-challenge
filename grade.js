function getStudentGrade() {
    // Prompt the user to input the student's marks
    let marks = parseInt(prompt("Enter student marks (0 - 100):"));

    // Check if the input is valid (a number between 0 and 100)
    if (marks >= 0 && marks <= 100) {
        // Determine the grade based on the mark ranges
        if (marks > 79) {
            console.log("Grade: A");
        } else if (marks >= 60 && marks <= 79) {
            console.log("Grade: B");
        } else if (marks >= 50 && marks <= 59) {
            console.log("Grade: C");
        } else if (marks >= 40 && marks <= 49) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }
    } else {
        console.log("Please enter a valid mark between 0 and 100.");
    }
}


