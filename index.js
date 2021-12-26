var section = 0;

$(document).scroll(function () {
    const y = $(this).scrollTop();
    const vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -400) / 3;

    if (y > 0 && y < 0.5*vh && section != 0){
      if(section == 1)
      {
        $("#wiz-1").removeClass("wiz-active");
        $("#wiz-1").addClass("wiz-inactive");
      }
      
      $("#wiz-0").removeClass("wiz-inactive");
      $("#wiz-0").addClass("wiz-active");  
      $(".wiz").addClass("hide");    
      
      section = 0;
    }
    else if(y >= 0.5*vh && y < (1.5*vh) && section != 1){
      if(section == 0){
        $("#wiz-0").removeClass("wiz-active");
        $("#wiz-0").addClass("wiz-inactive");
        $(".wiz").removeClass("hide");    
      }
      if(section == 2){
        $("#wiz-2").removeClass("wiz-active");
        $("#wiz-2").addClass("wiz-inactive");        
      }
      $("#wiz-1").removeClass("wiz-inactive");
      $("#wiz-1").addClass("wiz-active");
      section = 1;
    }
    else if(y >= (1.5*vh) && y < (2.5*vh) && section != 2){
      if(section == 3)
        $(".wiz").removeClass("hide");

      if(section == 1){
        $("#wiz-1").removeClass("wiz-active");
        $("#wiz-1").addClass("wiz-inactive");
      }  
      
      $("#wiz-2").removeClass("wiz-inactive");
      $("#wiz-2").addClass("wiz-active");

      section = 2;
    }
    else if(y > (2.5*vh)){
      $(".wiz").addClass("hide");
      section = 3;
    }

});

$(document).ready(function(){

    scrollToFirst();

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

function scrollToFirst(){
  var body = $("body");
  body.animate({scrollTop:0}, '500');
}

function scrollToSecond(){
  const vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -400) / 3;
  var body = $("body");
  body.animate({scrollTop:vh}, '500');
}

function scrollToThird(){
  const vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) -400) / 3;
  var body = $("body");
  body.animate({scrollTop:2*vh}, '500');
}