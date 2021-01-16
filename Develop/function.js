//Hour of day
//Take date out of object
//Data value for each block that has # corresponding with hour
//For loop through data blocks to check this
//Classes past present future, set attribute to color

  var now = moment().hour();
  console.log(now);

  function colorChange () {

    for (var i = 0; i < content.length; i++) {
    timeBlock = content[i].dataset.time;

    if (timeBlock > now) {
      timeBlock.attr("class", "future")
    }else if (timeBlock < now) {
      timeBlock.attr("class", "past")
    }else if (timeBlock == now) {
      timeBlock.attr("class", "present")
    }
    
    }
  }
  colorChange();
