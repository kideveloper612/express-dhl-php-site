$(document).ready(function(){
// progress bar
 setTimeout(function(){
      $(".pro-1").css("background-color","#86d16d");
    },500);

 setTimeout(function(){
      $(".pro-2").css("background-color","#86d16d");
    },1000);

 setTimeout(function(){
      $(".pro-3").css("background-color","#86d16d");
    },1500);

 setTimeout(function(){
      $(".pro-4").css("background-color","#86d16d");
    },2000);

 setTimeout(function(){
    $('.next-page').addClass('animated  pulse infinite');  
    },2500);


 // progress bar 2

// pages show and hide
        $('.next-page').on('click', function(){
  
          $('#page-1').hide();
  
           $('#page-2').show();
         
  });

         $('.shedule').on('click', function(){
  
          $('#page-2').hide();
          $('#page-3').addClass('animated  zoomIn ');  
           $('#page-3').show();
         
  });

         $('.y').on('click', function(){
  
          $('#page-3').hide();
          $('#page-4').addClass('animated  zoomIn ');  
           $('#page-4').show();
         
  });
  
         $('.x').on('click', function(){
  
          $('#page-4').hide();
  
           $('#page-5').show();
          setTimeout(function(){
      $(".pro-11").css("background-color","#86d16d");
    },1000);

 setTimeout(function(){
      $(".pro-22").css("background-color","#86d16d");
    },1500);

 setTimeout(function(){
      $(".pro-33").css("background-color","#86d16d");
    },2000);

 setTimeout(function(){
      $(".pro-44").css("background-color","#86d16d");
    },2500);

  });

// text 1 by 1 animation on second page
   $('.next-page ').on('click', function(){
 

       setTimeout(function(){
      $('.d').addClass('animated  slideInLeft ');   
      $('.d').removeClass('d-none ');   
    },1000);

        setTimeout(function(){
      $('.c').addClass('animated  slideInLeft ');   
      $('.c').removeClass('d-none ');   
    },3000);

      setTimeout(function(){
      $('.b').addClass('animated  slideInLeft ');   
      $('.b').removeClass('d-none ');   
    },5000);

      setTimeout(function(){
      $('.a').addClass('animated  slideInLeft ');   
      $('.a').removeClass('d-none');   
    },7000);

    setTimeout(function(){
      $('.shedule ').addClass('animated  pulse infinite');   
    },11000);
  }); 


// first dates
 var date=new Date();
    var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL",
      "AUG","SEP","OCT","NOV","DEC"];
      var val=date.getDate()-2+" "+months[date.getMonth()]+" "+date.getFullYear();
      $(".first-date").html(val);


      // second dates
      var date2=new Date();
    var months2=["JAN","FEB","MAR","APR","MAY","JUN","JUL",
      "AUG","SEP","OCT","NOV","DEC"];
      var val2=date2.getDate()-1+" "+months2[date2.getMonth()]+" "+date2.getFullYear();
      $(".second-date").html(val2);

      // third dates
       var date3=new Date();
    var months3=["JAN","FEB","MAR","APR","MAY","JUN","JUL",
      "AUG","SEP","OCT","NOV","DEC"];
      var val3=date3.getDate()+2+" "+months3[date3.getMonth()]+" "+date3.getFullYear();
      $(".third-date").html(val3);
      

// firts date day
      var weekday=new Array(7);
weekday[0]="Su";
weekday[1]="Mo";
weekday[2]="Tu";
weekday[3]="We";
weekday[4]="Th";
weekday[5]="Fr";
weekday[6]="Sa";

var d = new Date();
var n = weekday[d.getDay()-2];
$('.day1').html(n);

// second date day
      var weekday2=new Array(7);
weekday2[0]="Su";
weekday2[1]="Mo";
weekday2[2]="Tu";
weekday2[3]="We";
weekday2[4]="Th";
weekday2[5]="Fr";
weekday2[6]="Sa";

var d2 = new Date();
var n2 = weekday2[d2.getDay()-1];
$('.day2').html(n2);


// third date day
      var weekday3=new Array(7);
weekday3[0]="Su";
weekday3[1]="Mo";
weekday3[2]="Tu";
weekday3[3]="We";
weekday3[4]="Th";
weekday3[5]="Fr";
weekday3[6]="Sa";

var d3 = new Date();
var n3 = weekday3[d3.getDay()+2];
$('.day3').html(n3);
// alert(n+'-----'+n2+'-------'+n3);

 });
 

   