//Navigation to booking page
function bookNow(){
    window.location.href = "book.html";
}

//Variables needed for booking page
const name1 = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const dateTime = document.getElementById('inputDateTime');
const expert = document.getElementById('expert');
const hand = document.getElementById('handCare');
const foot = document.getElementById('footCare');
const package = document.getElementById('packages');
const details = document.getElementById('aboutusdetails2')

const confirmbtn = document.getElementById('confirmbtn');
const bookingbtn = document.getElementById('bookingbtn');
const cancelbtn = document.getElementById('cancelbtn');
const nameOut = document.getElementById('nameOut');
const emailOut = document.getElementById('emailOut');
const dateTimeOut = document.getElementById('dateTimeOut');
const expertOut = document.getElementById('expertOut');
const handOut = document.getElementById('handOut');
const footOut = document.getElementById('footOut');
const packagesOut = document.getElementById('packagesOut');

//Make appointment details visible
function display(){
    //make appointment details visible
    details.style.visibility = "visible";

    nameOut.innerHTML = name1.value;
    emailOut.innerHTML = email.value;

    //Source for date conversion https://stackoverflow.com/questions/17545708/parse-date-without-timezone-javascript
    const dateOptions = { timeZone: 'EST', month: 'long', day: 'numeric', year: 'numeric' };
    const myDate = new Date(dateTime.value);
    myDate.toLocaleDateString('en-US', dateOptions);
    dateTimeOut.innerHTML = myDate;


    expertOut.innerHTML = expert.value;
    handOut.innerHTML = "Hand Care: "+ hand.value;
    footOut.innerHTML = "Foot Care: " + foot.value;
    packagesOut.innerHTML = "Packages: " + package.value;

    //enables the booking button
    bookingbtn.style.visibility = "visible";
    bookingbtn.classList.remove("disabled");

    //enables the cancel button
    cancelbtn.style.visibility = "visible";
    cancelbtn.classList.remove("disabled");

    //disable confirm button
    confirmbtn.style.visibility = "hidden";
    confirmbtn.classList.add("disabled");
}

//Cancel button on booking page
function cancel(){
    //make appointment details hidden 
    details.style.visibility = "hidden"; 

    //disable and hide the booking button
    bookingbtn.style.visibility = "hidden";
    bookingbtn.classList.add("disabled");

    //disable and hide the cancel button
    cancelbtn.style.visibility = "hidden";
    cancelbtn.classList.add("disabled");

    //re-enable confirm button
    confirmbtn.style.visibility = "visible";
    confirmbtn.classList.remove("disabled");
}

//Navigation to confirmation page from booking page
function confirmation(){
window.location.href = "bookconfirmation.html";
}

//Navigation back to home from confirmation page
function homeNow(){
    window.location.href = "index.html";
}