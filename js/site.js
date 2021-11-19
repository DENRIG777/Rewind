//Get the string from the page
//Controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];


    // let name=Grace
    // name[0]=G
    // name[4]=e
    // last pos in an array name.length -1

    //reverse a string using a for loop
    for (let index = userString.length - 1 ; index >=  0; index--) {
        revString += userString[index];
    }

    return revString;

}

//Display the reversed string to the user 
//view function
function displayString(revString){

    // write the msg to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    // show the alert box
    document.getElementById("alert").classList.remove("invisible");

}
