// fetching clock face from HTML
var clockFace = document.getElementById("clock-face");

// function to get the Time
function Time() {
    //took get Date methods for fetching hours, minutes and seconds  
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // amPm variable used for changing the meridiem.
    let amPm = "AM";


    // when hour section is above 12 it change the meridiem from AM to PM
    if (hours >= 12) {
        amPm = "PM";
    }
    //  conditions for adding zeros in single digit time values to achieve hh:mm:ss format
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (hours < "10") {
        hours = "0" + hours;
    }

    // adding all as a string for HH:MM:SS
    var time = hours + ":" + minutes + ":" + seconds + " " + amPm;

    // used the value of time as a text content of clockFace; 
    clockFace.textContent = time;


    /* because of dynamic nature of date method, the value of time changes continously. 
    but we have to update the value of time continously on UI in every one second,
    for this, i used setTimeout function with 1second timeout and inside it called the Time function recursively.   */

    var run = setTimeout(function () {

        /** looping over the listcontainer's paragraph  which contains the value of time putted by user
         * 
        */
        var children = listContainer.getElementsByTagName("p")
        for (let i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.firstChild.textContent == time) { alert("Alarm Ringing") }
             }
            

            Time(); /** responsible for continous time run on UI*/


         }, 1000)
    }   
// calling a Time function-->
Time();


    // fetching required html nodes by using their IDs
    var set = document.getElementById("set");
    var sessions = document.getElementById("session")
    var listContainer = document.getElementById("list-container")

    // implementing event listener on a "set" button to set the alarm.
    set.addEventListener("click", function () {
    
    // function to fetch the values from input fields of UI ie; maridiem and time input
    const getValue = () => {
      
        let inputTime = document.getElementById("input-time").value;  /** for fetching time input*/
        let val = sessions.value.toUpperCase();                       /** for fetching meridiem input*/

        if (inputTime == "" || val != "PM" && val != "AM") {          /** condition, if input field is vacant or meridiem is not in PM and AM format*/
            alert("Enter valid input values !");                     /** function showing alert and return from there */
            return;
        }

        let timeing = inputTime + " " + val;        /** joined both time and its meridien as string and stored in timeing variable */
        
        // function for putting the values of given time in a list container
        function putValue(e) {
            // created a paragraph for putting given time value and button inside paragraph to remove whole paragraph from list-->
            let listItem = document.createElement('p');
            let button = document.createElement("button");
            listItem.textContent = e;    /**parameter e contains the value of timeing */
            listItem.appendChild(button).textContent = "Delete";   /** appended button inside paragraph with textContent "button" */
            button.addEventListener("click", function () { listContainer.removeChild(listItem) }); /**"click" listener on button to remove paragraph */
            return listItem;
            }
        listContainer.appendChild(putValue(timeing))    /** appending the paragraph by calling the putValue function, because function returns para ie; listIem*/
        
        }
        // calling a function -->
    getValue(); 
    }
)










