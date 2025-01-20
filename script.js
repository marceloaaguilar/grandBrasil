window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('modalAccess'));
    myModal.show();

    var swiper = new Swiper(".header", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
}

document.getElementById('btnNo').onclick = function() {
    document.querySelector('.error-message').style.display = 'block';
    document.getElementById('contentModal').style.display = 'none';
    document.querySelector('.footer-modal-custom').style.display = 'none';
}



