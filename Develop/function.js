var blockOne = document.querySelector(".p9");
var blockTwo = document.querySelector(".p10");
var blockThree = document.querySelector(".p11");
var blockFour = document.querySelector(".p12");
var blockFive = document.querySelector(".p13");
var blockSix = document.querySelector(".p14");
var blockSeven = document.querySelector(".p15");
var blockEight = document.querySelector(".p16");
var blockNine = document.querySelector(".p17");

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

  function clearToDo () {
      if (now === 1) {
          localStorage.removeItem("9");
          localStorage.removeItem("10");
          localStorage.removeItem("11");
          localStorage.removeItem("12");
          localStorage.removeItem("13");
          localStorage.removeItem("14");
          localStorage.removeItem("15");
          localStorage.removeItem("16");
          localStorage.removeItem("17");
      }
  }
  clearToDo();

  function renderToDo () {

      var nineAm = localStorage.getItem("9")
      if (nineAm !== null) {
          blockOne.innerHTML = nineAm
      }

      var tenAm = localStorage.getItem("10")
      if (tenAm !== null) {
          blockTwo.innerHTML = tenAm
      }

      var elevenAm = localStorage.getItem("11")
      if (elevenAm !== null) {
          blockThree.innerHTML = elevenAm
      }

      var twelvePm = localStorage.getItem("12")
      if (twelvePm !== null) {
          blockFour.innerHTML = twelvePm
      }

      var onePm = localStorage.getItem("13")
      if (onePm !== null) {
          blockFive.innerHTML = onePm
      }

      var twoPm = localStorage.getItem("14")
      if (twoPm !== null) {
          blockSix.innerHTML = twoPm
      }

      var threePm = localStorage.getItem("15")
      if (threePm !== null) {
          blockSeven.innerHTML = threePm
      }

      var fourPm = localStorage.getItem("16")
      if (fourPm !== null) {
          blockEight.innerHTML = fourPm
      }

      var fivePm = localStorage.getItem("17")
      if (fivePm !== null) {
          blockNine.innerHTML = fivePm
      }

  }
renderToDo();
  // Info is returning, but now how do I print to specific areas?
//   function print() {

//     for (var j = 9; j < 17; j++) {
   
//     var items = localStorage.getItem(j);

//     console.log(items);

//     var first = localStorage.getItem("9");
//     textArea.innerHTML = first;

//     var second = localStorage.getItem("10");
//     textArea.innerHTML = second;
//     }
    
// }
// print();


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


