$(document).ready(function () {
  localStorageclear();
  var hour = moment().hour();
  var updatetime = setInterval(function () {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    hour = moment().hour();
    $("#Time").text(today);
    timevalidation();
    

  },1000)
   timevalidation();
  
  $(".save-btn").on("click", function () {
    var text = $(this).siblings(".text").val();
   var time = parseInt($(this).parent().attr("id"));
    localStorage.setItem(time, text);
    console.log(localStorage, text);
  //console.log(hour, time);
//timevalidation();

  })

  function timevalidation() {
    $(".text").each(function() {
    //console.log(this);
   //
   var time = parseInt($(this).parent().attr("id")); //hour=15;
  // console.log(time);
  // var hour=11;
   if(time==hour){
     $(this).addClass("present");
   }
   if(time<hour){
    $(this).addClass("past");
   }
   if(time>hour){
    $(this).addClass("future");
   }
      // if (hour > time) {
      //   $(this).addClass("past");
      // }
      // else if (time > hour) {
      //   $(this).addClass("future");
      // }
      // else {
      //   $(this).removeClass("past");
      //   $(this).addClass("present");
      // }


    })

  }
 function localStorageclear() {
  
   if(hour ==9 && hour==17 ){
     
   
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
   else{
    localStorage.clear();
   }
 

 }

  // $(".rowclass").each(function() {
  //   localStorage.getItem(".text").val();
  // })




















})