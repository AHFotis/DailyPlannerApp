//Array to print to do list on refresh
var itemsArray = [];
//Variable for colorChange and renderToDo functions
var content = $(".plannerContent");

//Returns the current hour in military time
var now = moment().hour();

//Returns the date with day, month, date, year
var date = moment().format("dddd, MMMM Do YYYY");

//Prints date to HTML
$("#currentDay").text(date);

//Clears page and local storage for a fresh day
$(".clearBtn").on("click", function () {

  $(".plannerContent").html("");

  for (var x = 9; x < 18; x++) {
    localStorage.removeItem(x);
  }
})

//Gets the list of to dos from local storage on refresh
function getToDos() {
  for (var j = 9; j < 18; j++) {
    var items = localStorage.getItem(j);
    itemsArray.push(items);
  }
}
getToDos();


//Renders to dos to the page
function renderToDo(arr) {

  for (var k = 0; k < content.length; k++) {
    if (arr[k] !== null) {
      content[k].innerHTML = arr[k];
    }
  }
}
renderToDo(itemsArray);


//Function to change color blocks as day progresses
function colorChange() {

  for (var i = 0; i < content.length; i++) {
    var divNum = parseInt(content[i].dataset.time);

    if (divNum > now) {
      content[i].setAttribute("id", "future");
    }

    if (divNum == now) {
      content[i].setAttribute("id", "present");
    }

    if (divNum < now) {
      content[i].setAttribute("id", "past");
    }
  }
}
colorChange();

//Saves to do item to local storage when save button is clicked
$(".saveBtn").on("click", function () {

  var relatedInput = $(this).parent().children(".plannerContent").val();
  var saveName = $(this).data("time");

  localStorage.setItem(saveName, relatedInput);

})