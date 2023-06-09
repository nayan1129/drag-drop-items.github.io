let draggedItem = null;

function allowDrop(event) {
  // this method does not prevent futher propagation of a event through the DOM.
  event.preventDefault();
}

function drag(event) {
  // selected the value through target
  draggedItem = event.target;
  // Setting the data for container-2
  event.dataTransfer.setData("text/html", draggedItem.innerHTML);
  draggedItem.classList.add("dragging");
}

function drop(event) {
  // this method does not prevent futher propagation of a event through the DOM.
  event.preventDefault();
  // conditional method from which the data is get and also the data is set to another container-2 also with the help of .remove property the class is removed
  if (draggedItem) {
    let data = event.dataTransfer.getData("text/html");
    event.target.innerHTML += data;
    draggedItem.classList.remove("dragging");
    draggedItem = null;
    showMessage("item dropped successfully");
  }
}

function reset() {
  // getting the elements by javascript methods
  let container1 = document.getElementById("container-1");
  let container2 = document.getElementById("container-2");
  // setting the value to another container that will excatly show the value of container-1
  container1.innerHTML =
    '<div class="item draggable" draggable="true">Item 1 </div> <div class="item draggable" draggable="true">Item 2 </div> <div class="item draggable" draggable="true">Item 3 </div>';
  container2.innerHTML = "";
  showMessage(" ");
}

function showMessage(message) {
  // setting the message through javascript function
  document.getElementById("message").innerHTML = message;
}
//  getting the class by javascript method
let draggableItems = document.getElementsByClassName("draggable");
// this is a for each loop it will apply for each elements in the HTML and then by adding EventListner for these elements we can change the elements behaviour
for (let i = 0; i < draggableItems.length; i++) {
  draggableItems[i].addEventListener("dragstart", drag);
}
