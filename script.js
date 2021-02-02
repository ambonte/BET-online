/*****STYLING THE NAVIGATION BAR******************** */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*********END OF NAV BAR STYLING******************** */

/************TOGGLE ON THE PRODUCT************** */

$(document).ready(function () {
    $(".img1, .one").click(function () {
      $("#img1").toggle();
      $(".one").toggle();
    });
  });
  
  $(document).ready(function () {
    $(".img2, .overserv2").click(function () {
      $("#img2").toggle();
      $(".overserv2").toggle();
    });
  });
  
  $(document).ready(function () {
    $(".product, .overserv3").click(function () {
      $("#product").toggle();
      $(".overserv3").toggle();
    });
  });
/***********END OF TOGGLE********************** */