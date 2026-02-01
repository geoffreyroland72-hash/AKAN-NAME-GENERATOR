// Function to handle the form submission
function generateAkanName(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // 1. Retrieve the user's input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // 2. Validate the input
    if (day <= 0 || day > 31) {
        alert("Please enter a valid day between 1 and 31.");
        return;
    }
    if (month <= 0 || month > 12) {
        alert("Please enter a valid month between 1 and 12.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    // 3. Calculate the day of the week using the formula
    // CC is the first two digits, YY is the last two digits
    const CC = parseInt(year.substring(0, 2));
    const YY = parseInt(year.substring(2, 4));
    const MM = month;
    const DD = day;

    // The formula provided in Step 5:
    let dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    
    // Convert to a positive integer 0-6
    let index = Math.floor(Math.abs(dayOfWeek));

    // 4. Match the calculated day to the corresponding Akan name
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let finalName = "";
    if (gender === "male") {
        finalName = maleNames[index];
    } else {
        finalName = femaleNames[index];
    }

    // 5. Display the result on the webpage
    const resultDisplay = document.getElementById("result");
    resultDisplay.innerText = `Your Akan name is ${finalName}!`;
}

// Add event listener to the form
document.getElementById("akan-form").addEventListener("submit", generateAkanName);