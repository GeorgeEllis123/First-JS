// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);
console.log("hello");

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
    "score": '',
  }

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

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + myJSON['fname'] + " " + myJSON['lname'] + "'s favorite pet is: " + myJSON['favorite'] + "</p>\n";

  oldJSON = JSON.parse(localStorage.getItem("data"));
  console.log(oldJSON);

  localStorage.setItem("data", JSON.stringify(myJSON));
  console.log(localStorage);
}

function myMouseOver(id) {
  document.getElementById(id).style.backgroundColor = "green"
}

function myMouseOut(id) {
  document.getElementById(id).style.backgroundColor = ""
}
