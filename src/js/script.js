$(document).ready(function() {
    // modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow')
    $('#thanks').fadeOut();
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow')
  });


    // dawnload
    $('input[type="file"]').change(function(){
        const value = $("input[type='file']").val();
        $('.value').text(value);
    });

    // up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }
    });
    
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          data: $(this).serialize()
        }).done(function() {
          $(this).find('input').val("");
          $('#consultation').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
    
          $('form').trigger('reset');
        });
        return false;
      });
});

// menu
const hamburger = document.querySelector('.header__hamburger'),
      closed = document.querySelector('.mobile-menu__close'),
      menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closed.addEventListener('click', () => {
    menu.classList.remove('active');
});

//percent
const percent = document.querySelectorAll('.skill-tools__percent'),
      scale = document.querySelectorAll('.skill-tools__scale span');

percent.forEach((item, i) => {
    scale[i].style.width = item.innerHTML;
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = new FormData(form);
        fetch("mailer/smart.php", {
            method: "POST",
            body: formData
        });
    });
});
