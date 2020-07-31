// smooth scrolling animation
$(document).ready(function(){
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
        }, 10, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  //sticky navbar
  window.scroll = function(){stickyNav()};

  // get the navbar
  var navbar = document.getElementById("site-navbar");

  // get the offset position of the navbar
  var sticky = 500;

  // add the sticky class to the navbar when you reach its scroll position
  // remove sticky when you leave the scroll position
  function stickyNav(){
    if(window.pageYOffset >= 500){
      navbar.classList.add("sticky")
    }else{
      navbar.classList.remove("sticky");
    }
  }