// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  if (document.getElementById("dog").checked) {
    myDiv.innerHTML += "\t\t<img src='dog.jpg' />\n";
  }
  if (document.getElementById("cat").checked) {
    myDiv.innerHTML += "\t\t<img src='cat.jpg' />\n";
  }
  if (document.getElementById("bird").checked) {
    myDiv.innerHTML += "\t\t<img src='bird.jpeg' />\n";
  }
  if (document.getElementById("hamster").checked) {
    myDiv.innerHTML += "\t\t<img src='hamster.jpg' />\n";
  }

  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
}
