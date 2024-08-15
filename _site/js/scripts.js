// Scroll behavior class
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

// Exit class
$(document).mouseleave(function() {
    // Check if the event has already been triggered in this session
    if (!sessionStorage.getItem('exitTriggered')) {
        $("body").addClass("exit");

        // Set a timeout to remove the .exit class after 1800ms
        setTimeout(function() {
            $("body").removeClass("exit");
        }, 1800);

        // Set a flag in session storage
        sessionStorage.setItem('exitTriggered', 'true');
    }
});

// Mobile Menu Toggle
$("button.hamburger").click(function() {
  $(this).toggleClass("active");
  $("#mobile-menu").toggleClass("active");
  $("body").toggleClass("locked");
});

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

// YouTube modal
// document.addEventListener('DOMContentLoaded', function () {

//     const videoButtons = document.querySelectorAll('.video-trigger');
//     const videoModal = document.getElementById('video-modal');
//     const videoContainer = document.getElementById('video-container');
//     const closeBtn = document.querySelector('.close-btn');

//     videoButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const videoId = this.getAttribute('data-video-id');
//             const embedCode = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
//             videoContainer.innerHTML = embedCode;
//             videoModal.classList.add('active');
//         });
//     });

//     closeBtn.addEventListener('click', function () {
//         videoModal.classList.remove('active');
//         videoContainer.innerHTML = '';
//     });
// });

// YouTube modal
document.addEventListener('DOMContentLoaded', function () {
    const videoTrigger = document.querySelectorAll('.video-trigger');
    const videoModal = document.getElementById('video-modal');
    const embedContainer = document.querySelector('.embed-container');
    const closeBtn = document.querySelector('.close-btn');

    videoTrigger.forEach(button => {
        button.addEventListener('click', function () {
            const videoId = this.getAttribute('data-video-id');
            const embedCode = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            embedContainer.innerHTML = embedCode;
            videoModal.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', function () {
        videoModal.classList.remove('active');
        embedContainer.innerHTML = '';
    });

   const closeModal = () => {
        videoModal.classList.remove('active');
        embedContainer.innerHTML = '';
    };

    closeBtn.addEventListener('click', closeModal);

    // Add event listener for ESC key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

});


// Horizontal Scroll Carousel
document.addEventListener('DOMContentLoaded', function() {
    const scrollRightBtn = document.getElementById('scrollRight');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollContainer = document.getElementById('scrollContainer');

    // Check if elements exist
    if (!scrollRightBtn || !scrollLeftBtn || !scrollContainer) {
        console.error('One or more elements are missing:', {
            scrollRightBtn,
            scrollLeftBtn,
            scrollContainer
        });
        return; // Exit the function if elements are missing
    }

    // Horizontal Scroll Carousel
    scrollRightBtn.addEventListener('click', function() {
        // Add the 'active' class to show the left button
        scrollLeftBtn.classList.add('active');

        // Existing scroll logic
        scrollContainer.scrollBy({
            left: getScrollAmount(), // Assuming getScrollAmount() is defined as before
            behavior: 'smooth'
        });
    });

    scrollContainer.addEventListener('scroll', function() {
        if (scrollContainer.scrollLeft > 100) {
            // Add the 'active' class when not scrolled all the way to the left
            scrollContainer.classList.add('active');
            scrollLeftBtn.classList.add('active');
        } else {
            // Remove the 'active' class when scrolled all the way to the left
            scrollContainer.classList.remove('active');
            scrollLeftBtn.classList.remove('active');
        }
    });

    scrollLeftBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });
    });

    // Drag-to-Scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.style.cursor = 'grabbing';
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1; // The number 1 determines the scroll speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    function getScrollAmount() {
        const screenWidth = window.innerWidth;
        let scrollAmount;

        if (screenWidth >= 1024) { // Desktop
            scrollAmount = 650; // scroll more on larger screens
        } else if (screenWidth >= 768) { // Tablet
            scrollAmount = 420; // medium scroll on medium screens
        } else { // Mobile
            scrollAmount = 330; // less scroll on smaller screens
        }

        return scrollAmount;
    }
});


// Video Src script
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('vid');

    if (window.innerWidth > 800 && video != null) {
        var videoSrc = video.getAttribute('data-src');
        video.setAttribute('src', videoSrc);
    }
});


// Tooltip width
document.querySelectorAll('.tooltip').forEach(tooltip => {
    const width = tooltip.getAttribute('data-width');
    tooltip.style.setProperty('--tooltip-width', width);
});


// Article theme switcher
document.querySelector('#themer').addEventListener('click', function() {
    this.classList.toggle('active');
    document.body.classList.toggle('themer-lite');
});


// Footer Interactions
document.addEventListener('DOMContentLoaded', () => {
    const socialEmail = document.querySelector('.social-email');
    const socialHi = document.querySelector('.social-hi');
    const socialX = document.querySelector('.social-x');
    const socialLinkd = document.querySelector('.social-linkd');
    const domainSet = document.querySelector('.domain-set');

    // Function to copy email to clipboard
    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };

    // Function to handle hover
    const addHoverClass = (element, className) => {
        element.addEventListener('mouseover', () => {
            domainSet.classList.add(className);
        });

        element.addEventListener('mouseout', () => {
            domainSet.classList.remove(className);
        });
    };

    // Add hover logic for different elements
    addHoverClass(socialEmail, 'email');
    addHoverClass(socialHi, 'hi');
    addHoverClass(socialX, 'x');
    addHoverClass(socialLinkd, 'linkd');

    // Click event to copy email and update content
    socialEmail.addEventListener('click', () => {
        copyToClipboard('hello@elibrumley.com');
        socialEmail.classList.add('copied');
        
        setTimeout(() => {
            socialEmail.classList.remove('copied');
        }, 2000);
    });
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




