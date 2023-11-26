// Scroll add header class
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 85) {
//         $("header").addClass("scroll");
//     } else {
//         $("header").removeClass("scroll");
//     }
// });

var hasScrolled = false;

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var scroll = $(window).scrollTop();

    if (scroll >= 85) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }

    // Check if the user has scrolled down
    if (scroll > 0) {
        hasScrolled = true;
    }

    // If the user scrolled down and then back up to the top
    if (scroll <= 0 && hasScrolled) {
        $("header").addClass("top");

        // Remove the .top class after 800ms
        setTimeout(function() {
            $("header").removeClass("top");
            hasScrolled = false; // Reset the flag
        }, 800);
    }
});

$(document).mouseleave(function() {
    // Check if the event has already been triggered in this session
    if (!sessionStorage.getItem('exitTriggered')) {
        $("header").addClass("exit");

        // Set a timeout to remove the .exit class after 1800ms
        setTimeout(function() {
            $("header").removeClass("exit");
        }, 1800);

        // Set a flag in session storage
        sessionStorage.setItem('exitTriggered', 'true');
    }
});

// Mobile Toggle
$("button.hamburger").click(function() {
  $(this).toggleClass("active");
  $("#mobile-menu").toggleClass("active");
  $("body").toggleClass("locked");
});

// Isitope Init script
// $('.grid').isotope({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     masonry: {
//       columnWidth: '.grid-sizer'
//     }
// });
// // filter items on button click
// $('.filters').on( 'click', 'li', function() {
//     var filterValue = $(this).attr('data-filter');
//     $('.grid').isotope({ filter: filterValue });
//     $('.filters li').removeClass('active');
//     $(this).addClass('active');
// });

// Img blur
document.addEventListener("DOMContentLoaded", function() {
  var imgBgBlur = document.querySelector('.img-bg-blur');
  if (imgBgBlur) {
    var firstImage = imgBgBlur.querySelector('img');
    if (firstImage) {
      var imageUrl = 'url("' + firstImage.src + '")';
      imgBgBlur.style.setProperty('--dynamic-bg-image', imageUrl);
    }
  }
});

// Card Hover Effect
document.querySelectorAll(".cards-grid").forEach(gridElement => {
  const cardWraps = gridElement.querySelectorAll(".card-wrap");

  gridElement.addEventListener("mousemove", throttle(function(event) {
    cardWraps.forEach(cardWrap => {
      const { left, top } = cardWrap.getBoundingClientRect();
      const cursorX = event.clientX - left;
      const cursorY = event.clientY - top;

      cardWrap.style.setProperty("--cursor-x", cursorX + "px");
      cardWrap.style.setProperty("--cursor-y", cursorY + "px");
    });
  }, 100)); // Throttling the event to fire at most every 100ms
});

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
