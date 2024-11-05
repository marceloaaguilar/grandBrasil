document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper(".mySwiper", {
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();

});


document.getElementById('btnNo').onclick = function() {
    document.querySelector('.error-message').style.display = 'block';
    document.getElementById('contentModal').style.display = 'none';
    document.querySelector('.modal-footer').style.display = 'none';
    document.querySelector('.modal-header').style.display = 'none';
}

