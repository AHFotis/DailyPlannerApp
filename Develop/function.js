
//Returns the current hour in military time
  var now = moment().hour();
  console.log(now);

//Returns the date with day, month, date, year
  var date = moment().format("dddd, MMMM Do YYYY");
  console.log(date);
//prints to HTML
  $("#currentDay").text(date);

//variable for colorChange function
  var content = $(".plannerContent");
  console.log(content);
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

  