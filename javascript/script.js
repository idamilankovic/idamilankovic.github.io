
// window.alert("Good Morning");

// function myName (){
//     let text;
//     let person = prompt("What is your name?");
//     if (person==null || person =="") {
//         window.alert("You didn't enter your name")
//     }
//     else {
//         window.alert("Hello " + person + "!");
//     }
// }

// myName();

// ###################
// function myConfirm () {
//     let text = "Do you want to proceed?";
//     if (confirm(text) == true) {
//         window.alert("You pressed OK");
//     }
//     else {
//         window.alert("You pressed Cancel");
//     }
// }

// myConfirm();

// #######################
// var text;
// let person = prompt("What is your name?");
// function myName () {
//     if (person == null || person == "") {
//         text = "You didn't enter your name";
//     }
//     else {
//         text = "Hello " + person + "!"; 
//     }
//     document.querySelector("#content").innerHTML = text;
// }


// var x = 4;
// var y = 9;
// var z = x + y;
// window.alert("4 + 9 =" + z);

// #######################
// var text;
// function myName () {
//     let person = prompt("Enter your name");
//     if (confirm(text)==true) {
//         window.alert("Welcome " + person);
//     }
//     else if (confirm(text)==false) {
//         window.alert("Goodbye " + person + ". Hurry back!");
//     }

// }

// ##############################
// function myFunction () {
//     window.alert("The HTML page has loaded.");

// }

// ############################# 3-2
// function myFunction (arg) {
//     window.alert("The function has been called and was passed " + arg);
//     return "myFunction() return value";
// }

// ##########################
// var numCorrect = 0;
// function takeTest() {
// var response = "";
// var points = 0;
// var q1 = "What company developed JavaScript?";
// var a1 = "NETSCAPE";
// var q2 = "Using JavaScript operator precedence,\n what is the result of the following expression? 2 + 4 * 6";
// var a2 = 26;
// var q3 = "With what object-oriented programming language\n is JavaScript often compared and confused?";
// var a3 = "JAVA";
// response = prompt(q1,"");
// if (response) points= runningTotal((response.toUpperCase() == a1) ? 1 : 0);
//     alert(points);
// response = prompt(q2,"");
// if(response) points= runningTotal((response == a2) ? 1 : 0);
//     alert(points);
// response = prompt(q3,"");
// if (response) points=runningTotal((response.toUpperCase() == a3) ? 1 : 0);
//     alert("You answered a total of " + points + " correctly.");
// numCorrect = 0;
// points = 0;
// }
// function runningTotal(i) {
//  numCorrect += i;
//  return numCorrect;
// } 

//################################## padajući izbornik 1 do 100
// window.onload = function dropDown (){
//     var selectNumber = document.querySelector("#selectNumber");
//     var contents;
//     for (let i = 1; i <= 100; i++) {
//         contents += "<option>" + i + "</option>";
//     }
//     selectNumber.innerHTML = contents;
// }

// ##################### Odabrana ocjena iz padajućeg izbornika
// function checkGrade(){
//     var text;
//     selectElement = document.querySelector("#selectAge");
//     grade = selectElement.value;

//     if(grade>4) {
//         text = "Your grade is " + grade;
//     }
//     else {
//         text= "Your grade is less than " + grade;
//     }
//     document.querySelector("#content").textContent = text;
// }

// ############################## 
// window.onload = function dropDown (){
//     var selectNumber = document.querySelector("#selectNumber");
//     var contents;
//     for (let i = 1; i <= 100; i++) {
//         contents += "<option>" + i + "</option>";
//     }
//     selectNumber.innerHTML = contents;
// }
// function checkGrade(){
//     var text;
//     grade = document.querySelector("#selectNumber").value;
//     if(grade==NaN) {
//         text = "Select grade" + grade;
//     }
//     else {
//         text= "Your grade is " + grade;
//     }
//     document.querySelector("#content").textContent = text;
// }

//################################## upisan broj i ispisana ocjena, while loop (3 pokušaja)

// ############################################### nedovršen izlazak iz petlje
// function checkGrade(){
//     var text;
//     var attempts =0;
//     grade = document.querySelector("#inputGrade").value;
//     while (((isNaN(grade) || grade=="")) && attempts<=3) {
//         attempts +=1 ;
//         if (attempts<=3) {
//         return alert("Enter your grade")
//         }
//         else {
//             break
//         }
//     }
//     parseInt(grade);
//     text= "Your grade is " + grade;
//     document.querySelector("#content").textContent = text;
// }

// #####################################################
// window.onload = function dropDown (){
//     var selectNumber = document.querySelector("#selectNumber");
//     var contents;
//     for (let i = 1; i <= 100; i++) {
//         contents += "<option>" + i + "</option>";
//     }
//     selectNumber.innerHTML = contents;
// }
// function checkGrade(){
//     var text;
//     grade = document.querySelector("#selectNumber").value;
//     if(grade==NaN) {
//         text = "Select grade" + grade;
//     }
//     else {
//         text= "Your grade is " + grade;
//     }
//     document.querySelector("#content").textContent = text;
// }
// ###################################### while, break, 
// function breakTest () {
//     var loopBoolean =true;
//     var myValue = "";
   
//     while (loopBoolean = true) {
//         myValue = prompt("Enter data:");
//         if (myValue == "") {
//             myValue = prompt("Enter data:");
//         }
//         else {
//             loopBoolean == false;
//             break;
//         }
        
//     }
//     document.querySelector("#content").textContent = myValue;

// }
// ########################## svi brojevi dijeljivi sa 7, continue
// function breakTest () {
//     var number ="";
//     for (var i=1; i<=100; i++) {
//         if (i%7 !=0) continue;
//        number += i + "<br>";
//     }
//     document.querySelector("#content").innerHTML = number;
// }

// ################################ odabrani grad, switch statement, default
// function switchTest(SetOption) {
//     OptionsSelect = document.frmOne.SetOption.value
//     alert(OptionsSelect);
//     switch (OptionsSelect) {
//     case "1":
//     alert("Arizona")
//     break
//     case "2":
//     alert("New Mexico")
//     break
//     case "3":
//     alert("California")
//     break
//     default:
//     alert("Cannot be determined")
//     }
//     } 

// function newWindow() {
//     window.open("https://www.google.com");
// }

// function smallWindow() {
//     myWindow = window.open("","", "height=100, width=100")
// }


function min() {
    var minimum = [3,6,4,9,1];
    var min_num ="";
    for (i in minimum) {
        if (i<10) {
            min_num = i;
        }
        console.log(min_num);
    }

    document.querySelector("#content").innerHTML = min_num;
}

