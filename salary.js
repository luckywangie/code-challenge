function calculateNetSalary() {
    // Prompt user for input
    let basicSalary = parseFloat(prompt("Enter your basic salary (in Ksh):"));
    let benefits = parseFloat(prompt("Enter your benefits (in Ksh):"));

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE tax based on tax bands (Assumed bands)
    let tax = calculateTax(basicSalary);

    // Calculate NHIF deductions (Assumed bands)
    let nhif = calculateNHIF(basicSalary);

    // Calculate NSSF deductions (Assumed as 6% of basic salary)
    let nssf = basicSalary * 0.06; // NSSF 6% deduction

    // Calculate net salary
    let netSalary = grossSalary - (tax + nhif + nssf);

    // Output results
    console.log("Gross Salary: Ksh " + grossSalary);
    console.log("Tax (PAYE): Ksh " + tax);
    console.log("NHIF Deduction: Ksh " + nhif);
    console.log("NSSF Deduction: Ksh " + nssf);
    console.log("Net Salary: Ksh " + netSalary);
}

// Function to calculate PAYE (tax)
function calculateTax(salary) {
    let tax = 0;
    if (salary <= 24000) {
        tax = salary * 0.10; // 10% tax for first 24,000
    } else if (salary <= 40000) {
        tax = 24000 * 0.10 + (salary - 24000) * 0.15; // 15% tax for next 16,000
    } else if (salary <= 80000) {
        tax = 24000 * 0.10 + 16000 * 0.15 + (salary - 40000) * 0.20; // 20% tax for next 40,000
    } else {
        tax = 24000 * 0.10 + 16000 * 0.15 + 40000 * 0.20 + (salary - 80000) * 0.30; // 30% tax for above 80,000
    }
    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(salary) {
    let nhif = 0;
    if (salary <= 5999) {
        nhif = 150;
    } else if (salary <= 7999) {
        nhif = 300;
    } else if (salary <= 11999) {
        nhif = 400;
    } else if (salary <= 14999) {
        nhif = 500;
    } else if (salary <= 19999) {
        nhif = 600;
    } else if (salary <= 29999) {
        nhif = 750;
    } else if (salary <= 39999) {
        nhif = 1000;
    } else {
        nhif = 1200;
    }
    return nhif;
}

