function generateAkanName(event) {
    event.preventDefault(); 

    
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    
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



    const CC = parseInt(year.substring(0, 2));
    const YY = parseInt(year.substring(2, 4));
    const MM = month;
    const DD = day;


    let dayOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    
    
    let index = Math.floor(Math.abs(dayOfWeek));


    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let finalName = "";
    if (gender === "male") {
        finalName = maleNames[index];
    } else {
        finalName = femaleNames[index];
    }

    
    const resultDisplay = document.getElementById("result");
    resultDisplay.innerText = `Your Akan name is ${finalName}!`;
}



document.getElementById("akan-form").addEventListener("submit", generateAkanName);
