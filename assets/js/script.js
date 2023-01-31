//current date.
const date = moment().format("DD MMMM YYYY");
$("#currentDay").text(date);

//current time check
const CurrentTime = moment().hour();
//console.log(CurrentTime);

function displayHours() {
  // run through time-blocks, grab the id and set it to a number value to run through the if statement.
  $(".time-block").each(function () {
    const hourSlot = parseInt($(this).attr("id"));

    //add classes to change BG properties. REMEMBER - also remove classes, to prevent confusion!
    if (hourSlot < CurrentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (hourSlot === CurrentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}
displayHours();

//click event -- retreive the hour via associated id and match to user input or "eventText".
$(".saveBtn").on("click", function () {
  let eventHour = $(this).parent().attr("id");
  let eventText = $(this).siblings(".description").val();

  //alert user if mistakenly left empty string.
  if (eventText === " ") {
    alert("Try again!");
  } else {
    //add to local storage.
    localStorage.setItem(eventHour, eventText);
    //add alert to notify user.
    alert("Event saved!");
  }
});

function getItem() {
  //retreive items in data storage once window is loaded.
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
}

getItem();

//clear local storage and text in the description classes.
$("#clear").on("click", function () {
  localStorage.clear();
  $(".description").val("");
  alert("Events cleared!");
});
