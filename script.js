$(document).ready(function () {
  
  var hour = moment().hour();
  localStorageclear();

  var updatetime = setInterval(function () {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    hour = moment().hour();
    $("#Time").text(today);

  },1000);

  updateHourly = setInterval(function() {
    timevalidation();
    localStorageclear();
  }, 100000)

  timevalidation();
  
  $(".save-btn").on("click", function () {
    var text = $(this).siblings(".text").val();
    var time = parseInt($(this).parent().attr("id"));
    localStorage.setItem(time, text);
    console.log(localStorage, text);
    localStorageclear();
  })

  function timevalidation() { //you can uncomment the line underneeth if you are not checking my homework from 9-5
    //var hour = 13 
    $(".text").each(function() {
      var time = parseInt($(this).parent().attr("id"));
      if(time == hour){
        $(this).addClass("present");
      }
      if(time < hour){
        $(this).addClass("past");
      }
      if(time > hour){
        $(this).addClass("future");
      }
    })

  }
 function localStorageclear() {
   if(hour >= 9 | hour <= 17 ){
    $("#9 .text").val(localStorage.getItem("9"));
    $("#10 .text").val(localStorage.getItem("10"));
    $("#11 .text").val(localStorage.getItem("11"));
    $("#12 .text").val(localStorage.getItem("12"));
    $("#13 .text").val(localStorage.getItem("13"));
    $("#14 .text").val(localStorage.getItem("14"));
    $("#15 .text").val(localStorage.getItem("15"));
    $("#16 .text").val(localStorage.getItem("16"));
    $("#17 .text").val(localStorage.getItem("17"));
   }
   else {
    localStorage.clear();
   }
 }
})