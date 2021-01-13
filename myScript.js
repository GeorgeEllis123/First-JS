// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var dog = document.getElementById("dog");
  var cat = document.getElementById("cat");
  var bird = document.getElementById("bird");
  var hamster = document.getElementById("hamster");

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  if (dog.checked) {
    myDiv.innerHTML += "\t\t<img src='dog.jpg' />\n";
  }
  else if (cat.checked) {
    myDiv.innerHTML += "\t\t<img src='cat.jpg' />\n";
  }
  else if (bird.checked) {
    myDiv.innerHTML += "\t\t<img src='bird.jpg' />\n";
  }
  else if (hamster.checked) {
    myDiv.innerHTML += "\t\t<img src='hamster.jpg' />\n";
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", lname);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
}
