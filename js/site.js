// get entered text
// controller
function getValue() {
    // clear previous data
    document.getElementById("alert").classList.add("invisible");

    let userText = document.getElementById("userString").value;

    let palindrome = palindromeCheck(userText);

    displayTacocat(palindrome);
}


// check if palindrome
// logic
function palindromeCheck(userText) {
    let revString = [];
    let userString = [];

    // reverse a string using a for loop
    for (let i = userText.length - 1; i >= 0; i--)
    {
        // skip spaces
        if (userText[i] != " ")
        {
            revString += userText[i];
        }
    }

    //remove space from userText
    for (let i = 0; i <= userText.length -1; i++)
    {
        if (userText[i] != " ")
        {
            userString += userText[i];
        }
    }

    // convert to lower case 
    let lowerRevString = revString.toLowerCase();
    let lowerUserString = userString.toLowerCase();

    // check if userString and revString are the same 
    if (lowerRevString == lowerUserString)
    {
        return true;
    }
    else
    {
        return false;
    }
}


// display results
function displayTacocat(status) {
    // write message to page
    if (status){
        document.getElementById("msg").innerHTML = `Your string is a palindrome.`;
    }
    else {
        document.getElementById("msg").innerHTML = `Your string is not a palindrome.`;
    }
    

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}
