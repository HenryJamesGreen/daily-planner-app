//current date.
const date = moment().format("DD MMMM YYYY");
$("#currentDay").text(date);

//current time check
const CurrentTime = moment().hour();
console.log(CurrentTime);

function displayHours() {
  // run through time-blocks, grab the id and set it to a number value to run through the if statemnet.
  $(".time-block").each(function () {
    const hourSlot = parseInt($(this).attr("id"));

    //add classes to change BG properties. REMEMBER - also remove classes, to prevent confusion!
    if (hourSlot < CurrentTime) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (hourSlot === CurrentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
displayHours();
