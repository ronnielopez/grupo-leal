const carousel3Dswiper = new Swiper(".carousel-3D-swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

$('input').on('change', function() {
  $('body').toggleClass('');
});

const radioButtons = document.querySelectorAll('input[type="radio"][name="slider"]');
const videoTags = document.querySelectorAll('video');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', (event) => {
    // Derive the video ID directly from the radio button's ID
    const selectedVideoId = event.target.id.slice(4);  // Remove "item-" prefix
    const selectedVideo = document.getElementById(selectedVideoId);

    // Apply "autoplay muted loop" attributes to the selected video
    selectedVideo.setAttribute('autoplay', '');
    selectedVideo.setAttribute('muted', '');
    selectedVideo.setAttribute('loop', '');

    // Remove attributes from other videos
    videoTags.forEach(videoTag => {
      if (videoTag !== selectedVideo) {
        videoTag.removeAttribute('autoplay');
        videoTag.removeAttribute('muted');
        videoTag.removeAttribute('loop');
      }
    });
  });
});
