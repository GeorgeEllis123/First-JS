// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

function myClick() {
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;

  // Get quiz results
  var q1 = document.getElementById("dog").checked;
  var q2 = document.getElementById("adams").checked;
  var q3a = document.getElementById("whale").checked;
  var q3b = document.getElementById("poodle").checked;
  var q3c = document.getElementById("cats").checked;
  var q3d = document.getElementById("karoke").checked;
  var q4 = document.getElementById("false1").checked;
  var q5 = document.getElementById("peso").value;
  var q6 = document.getElementById("10").checked;
  var q7 = document.getElementById("false2").checked;
  var q8 = document.getElementById("1982").checked;
  var q9 = document.getElementById("Snow White").checked;
  var q10a = document.getElementById("emu").checked;
  var q10b = document.getElementById("kiwi").checked;
  var q10c = document.getElementById("pigeon").checked;
  var q10d = document.getElementById("ostrich").checked;

  // Stores quiz results
  myJSON = {
    "fname": fname,
    "lname": lname,
    "q1": q1,
    "q2": q2,
    "q3": '',
    "q4": q4,
    "q5": '',
    "q6": q6,
    "q7": q7,
    "q8": q8,
    "q9": q9,
    "q10": '',
    "score": 0,
  }

  // Calculates the more complex results for the quiz
  if (q3b == false) {
    if (q3a == true && q3c == true && q3d == true){
      myJSON['q3'] = true;
    }
    else{
      myJSON['q3'] = false;
    }
  }
  else {
    myJSON['q3'] = false;
  }

  if (q5 == "peso") {
    myJSON['q5'] = true;
  }
  else {
    myJSON['q5'] = false;
  }

  if (q10c == false) {
    if (q10a == true && q10b == true && q10d == true){
      myJSON['q10'] = true;
    }
    else{
      myJSON['q10'] = false;
    }
  }
  else {
    myJSON['q10'] = false;
  }

  // Calculates the total score
  if (myJSON['q1']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q2']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q3']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q4']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q5']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q6']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q7']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q8']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q9']) {
    myJSON['score'] += 1;
  }
  if (myJSON['q10']) {
    myJSON['score'] += 1;
  }

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += '\t\t<h2 style="color:blue">Your Score: ' + myJSON['score'] + '/10</h2>\n';
  myDiv.innerHTML += '\t\t<h3 style="color:orange"><u>Answer Key:</u></h3>\n';

  // Shows the correct answers for all of the ones the user got wrong
  if (myJSON['q1']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 1</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button onclick="dropDown()" class="dropbtn" style="color:red">Question 1</button><div id="myDropdown" class="dropdown-content"><a style="color:green">Dog</a></div></div>\n';
  }

  if (myJSON['q2']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 2</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 2:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> John Adams</p>\n';
  }

  if (myJSON['q3']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 3</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 3:</b></i></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> First, Third, and Fourth</p>\n';
  }

  if (myJSON['q4']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 4</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 4:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> False</p>\n';
  }

  if (myJSON['q5']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 5</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 5:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> peso</p>\n';
  }

  if (myJSON['q6']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 6</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 6:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> 10</p>\n';
  }

  if (myJSON['q7']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 7</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 7:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> False</p>\n';
  }

  if (myJSON['q8']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 8</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 8:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> 1982</p>\n';
  }

  if (myJSON['q9']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 9</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 9:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> Snow White</p>\n';
  }

  if (myJSON['q10']) {
    myDiv.innerHTML += '\t\t<div class="dropdown"><button style="color:green">Question 10</button></div>\n';
  }
  else {
    myDiv.innerHTML += '\t\t<p style="color:red"><b>Question 10:</b></p>\n';
    myDiv.innerHTML += '\t\t<p style="color:green"><i>Correct Answer:</i> Emu, Kiwi, and Ostrich</p>\n';
  }


  //Retrieves the last user's data
  oldJSON = JSON.parse(localStorage.getItem("data"));
  console.log(oldJSON);

  // Stores the user's data
  localStorage.setItem("data", JSON.stringify(myJSON));
  console.log(localStorage);

  // Displays the data for the last user
  myDiv.innerHTML += '\t\t<br>';
  myDiv.innerHTML += '\t\t<h2 style="color:blue">Last User Data</h2>\n';
  myDiv.innerHTML += '\t\t<h4>Name: <i>' + oldJSON['fname'] + ' ' + oldJSON['lname'] + ' </i><p>\n';
  myDiv.innerHTML += '\t\t<p style="color:orange"><u>Did they get it correct? <u><p>\n';
  myDiv.innerHTML += '\t\t<p>Question 1: ' + oldJSON['q1'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 2: ' + oldJSON['q2'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 3: ' + oldJSON['q3'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 4: ' + oldJSON['q4'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 5: ' + oldJSON['q5'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 6: ' + oldJSON['q6'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 7: ' + oldJSON['q7'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 8: ' + oldJSON['q8'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 9: ' + oldJSON['q9'] + '<p>\n';
  myDiv.innerHTML += '\t\t<p>Question 10: ' + oldJSON['q10']+ '<p>\n';
  myDiv.innerHTML += '\t\t<p>Score: ' + oldJSON['score']+ '/10 <p>\n';


}

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myMouseOver(id) {
  document.getElementById(id).style.backgroundColor = "green"
}

function myMouseOut(id) {
  document.getElementById(id).style.backgroundColor = ""
}
