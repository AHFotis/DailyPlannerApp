//Array to print to do list on refresh
var itemsArray = [];

//Returns the current hour in military time
  var now = moment().hour();

//Returns the date with day, month, date, year
  var date = moment().format("dddd, MMMM Do YYYY");

//prints to HTML
  $("#currentDay").text(date);

//variable for colorChange and renderToDo functions
  var content = $(".plannerContent");

// Not working and not necessary
  // function clearToDo () {
  //     if (now === 1) {
  //         localStorage.removeItem("9");
  //         localStorage.removeItem("10");
  //         localStorage.removeItem("11");
  //         localStorage.removeItem("12");
  //         localStorage.removeItem("13");
  //         localStorage.removeItem("14");
  //         localStorage.removeItem("15");
  //         localStorage.removeItem("16");
  //         localStorage.removeItem("17");
  //     }
  // }
  // clearToDo();

  function getToDos () {
    for (var j = 9; j < 18; j++) {
      
      var items = localStorage.getItem(j);
      console.log(items);
      itemsArray.push(items);
      }
  }
  
  getToDos();
  console.log(itemsArray)

  function renderToDo (items) {
  
    for (var k = 0; k < content.length; k++) {
        console.log(content[k]);
        
        if (items[k] !== null) {
        content[k].innerHTML = items[k];
        }
      }
    }
     
renderToDo(itemsArray);
 


//Function to change color blocks as day progresses
  function colorChange () {

    for (var i = 0; i < content.length; i++) {
     var divNum = parseInt(content[i].dataset.time);
     console.log(divNum)
     
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

$(".saveBtn").on("click", function () {
    var relatedInput = $(this).parent().children(".plannerContent").val();
    var saveName = $(this).data("time");
    console.log(relatedInput)

    localStorage.setItem(saveName, relatedInput);
})


