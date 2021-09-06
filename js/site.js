// get entered text
// controller
function getValue() {
    // clear previous data
    document.getElementById("alert").classList.add("invisible");

    let userText = document.getElementById("userString").value;

    // check for palindrome
    let palindrome = palindromeCheck(userText);

    // display out message
    displayTacocat(palindrome);
}


// check if palindrome
// logic
function palindromeCheck(userText) {
    let revString = [];
    let returnObj = {}; // to hold multiple items on return

    userText = userText.toLowerCase();
    
    // remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userText = userText.replace(regex, "");

    // reverse a string using a for loop
    for (let i = userText.length - 1; i >= 0; i--)
    {
        revString += userText[i];
    }

    // check if userString and revString are the same 
    if (revString == userText)
    {
        returnObj.msg = "Well done! You entered a palindrome!";
    }
    else
    {
        returnObj.msg = "Sorry! you did not enter a palindrome!";
    }

    // add reversed string to obj
    returnObj.reversed = revString;

    return returnObj;
}


// display results
function displayTacocat(status) {
    // write message to page
    document.getElementById("alertHeader").innerHTML = status.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${status.reversed}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}
