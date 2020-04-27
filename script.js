$(document).ready(function () {
var hour;
  updatetime=setInterval(function(){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    hour = moment().hour();
    $("#Time").text(today);
    timevalidation();

  })
 var time;

  $(".save-btn").on("click", function () {
    var text = $(this).siblings(".text").val();
    time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    console.log(localStorage);
 
  })
  
  function timevalidation() {
    $(".text").each(function () {
      
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

localStorage.getItem("")







































})