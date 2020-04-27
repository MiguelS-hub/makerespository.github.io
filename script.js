$(document).ready(function () {
  var hour;
  var updatetime = setInterval(function () {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    hour = moment().hour();
    $("#Time").text(today);
    timevalidation();
    localStorageclear();

  })
  var time;

  $(".save-btn").on("click", function () {
    var text = $(this).siblings(".text").val();
    time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    console.log(localStorage);

  })

  function timevalidation() {
    $(".text").each(function() {

      if (hour > time) {
        $(this).addClass("past]");
      }
      else if (time > hour) {
        $(this).addClass("future");
      }
      else {
        $(this).removeClass("past");
        $(this).addClass("present");
      }


    })

  }
 function localStorageclear() {
   if(hour ==8 && hour==5 ){
     
   
  $("#9am .text").val(localStorage.getItem("9am"));

  $("#10am .text").val(localStorage.getItem("10am"));

  $("#11am .text").val(localStorage.getItem("11am"));

  $("#12pm .text").val(localStorage.getItem("12pm"));

  $("#1pm .text").val(localStorage.getItem("1pm"));

  $("#2pm .text").val(localStorage.getItem("2pm"));

  $("#3pm .text").val(localStorage.getItem("3pm"));

  $("#4pm .text").val(localStorage.getItem("4pm"));

  $("#5pm .text").val(localStorage.getItem("5pm"));
   }
   else{
    localStorage.clear();
   }
 

 }

  // $(".rowclass").each(function() {
  //   localStorage.getItem(".text").val();
  // })




















})