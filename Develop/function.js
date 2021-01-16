var content = $(".plannerContent");
console.log(content);

  var now = moment().hour();
  console.log(now);

  var day = moment().month();
  console.log(day);

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