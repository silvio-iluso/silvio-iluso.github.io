$(function() {
    $(".toggle").on("click", function() {
      $(".item").toggleClass("active");
      $(this).find("a").html(function(_, html) {
        return html === "<i class='fas fa-bars'></i>" ? "<i class='fas fa-times'></i>" : "<i class='fas fa-bars'></i>";
      });
      $(".menu").toggleClass("active");
    });
  });
  

// CARROUSEL

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });