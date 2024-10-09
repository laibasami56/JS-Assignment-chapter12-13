document.write("<h1>Chapter : 12-13 </h>");

//Question : 01 Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// Take input from the user
let charInput = prompt("Question 01 :  \n  Enter a single character:");

// Get the ASCII code of the character directly
let asciiCode = input[0].charCodeAt(0);

// Check if the input is a number (ASCII codes 48-57)
if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The input is a number.");
} 
// Check if the input is an uppercase letter (ASCII codes 65-90)
else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input is an uppercase letter.");
} 
// Check if the input is a lowercase letter (ASCII codes 97-122)
else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input is a lowercase letter.");
} 
// If it's none of the above
else {
    alert("The input is neither a number nor a letter.");
}

// Question 02 :. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// Accept two integers from the user
let firstNumber = prompt(" Question 02 \n Enter the first integer:");
let secondNumber = prompt("Enter the second integer:");

// Convert the input values to integers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

// Check and display the larger number or if they are equal
if (firstNumber > secondNumber) {
    alert("The larger number is: " + firstNumber);
} else if (secondNumber > firstNumber) {
    alert("The larger number is: " + secondNumber);
} else {
    alert("Both numbers are equal.");
}

//Question 03 : Write a program that takes input a number from user &
// state whether the number is positive, negative or zero. 

let num =prompt("Question 03 \n Enter the any Number : ");
if(num>0){
    alert("It's Positive number");
}
else if (num<0){
    alert("It's Negative Number ");
}
else if (num==0){
    alert("It's Zero ");
}

//Question 04 : Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// Accept a character from the user
let character = prompt("Question 04 \n Enter a single character:");

// Check if the input is a single character
if (character.length === 1) {
    // Convert the character to lowercase for comparison
    let lowerChar = character.toLowerCase();

    // Check if the character is a vowel
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || 
        lowerChar === 'o' || lowerChar === 'u') {
        alert("true");  // It is a vowel
    } 
    else {
        alert("false"); // It is not a vowel
    }
}
 else {
    alert("Please enter a single character."); // Error message for invalid input
}

//Question 05 :  Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords: i. Check if user has entered password. If not, then give message
//  “ Please enter your password”ii. Check if both passwords are same. If they are same, show message 
//  “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 


// Step 1: Store the correct password in a variable
let correctPassword = "mySecurePassword";

// Step 2: Ask the user to enter their password
let userPassword = prompt(" Question 05 \n Please enter your password:");

// Step 3: Validate the two passwords
// i. Check if user has entered a password
if (userPassword === "") {
    alert("Please enter your password");
} 
// ii. Check if both passwords are the same
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

//Question 06 : 6. This if/else statement does not work. Try to fix it:
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

let greeting;
let hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// Optional: Display the greeting
alert(greeting);

// Question 07 :  Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// Take time as input from the user in 24-hour format
let time = prompt("Question 07 \n Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// Convert the input to a number
time = Number(time);

// Implement conditions based on the time input
if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time < 2400) {
    alert("Good Night!");
} else {
    alert("Invalid time format. Please enter a valid time in 24-hour format.");
}
