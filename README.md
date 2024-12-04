# Salary and Grade Calculation System

This repository contains JavaScript code examples for calculating grades, speed detector points, and net salary. The code uses the readline module to interact with the user through the command line in a Node.js environment.

# Overview

Student Grade Calculation: Based on the input marks, the system calculates the grade using predefined thresholds.
Speed Detector: This system detects if a driver is speeding, calculates demerit points, and determines if the driver's license should be suspended based on the number of points.
Net Salary Calculation: This system calculates a user's net salary based on their basic salary, benefits, PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund) deduction, and NSSF (National Social Security Fund) deduction.
Features

# 1. Student Grade Calculation

The user is prompted to input their marks (0-100).
The system calculates and outputs the grade:
A for marks above 79.
B for marks between 60 and 79.
C for marks between 50 and 59.
D for marks between 40 and 49.
E for marks below 40.

# 2. Speed Detector

The user is prompted to input their speed.
The system checks if the speed is within the legal limit (70 km/h).
If the speed exceeds the limit, the system calculates the number of demerit points based on the over-speed value (5 points for every 5 km/h over the limit).
If the number of points exceeds 12, the user's license is suspended.

# 3. Net Salary Calculation

The user is prompted to enter their basic salary and benefits.
The system calculates the gross salary (basic salary + benefits).
It calculates PAYE tax based on Kenyan tax bands.
The system also calculates NHIF and NSSF deductions based on the salary.
It outputs the gross salary, PAYE tax, NHIF deductions,
NSSF deductions, and the net salary.

# Prerequisites

Node.js: The code requires Node.js to be installed. You
can download and install it from nodejs.org.
Terminal/Command Prompt: The code runs in a terminal/command prompt as a Node.js script.
