function myFunction() {
    $('.slider').css({
       'margin-top':'155px'
    });
    $('.phone-page').css({
        'margin-top':'155px'
    });
    $('.phone-1').css({
        'margin-top':'155px'
    });
}
$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
        'use strict';
        if($(window).scrollTop()<60){
            $('.slider').css({
                'margin-top':'75px'
             });
             $('.phone-page').css({
                 'margin-top':'75px'
             });
             $('.phone-1').css({
                'margin-top':'75px'
            });
        }
    });
});

// const logoutBtn = document.querySelector('#logout-btn');
// logoutBtn.addEventListener('click', e => {
//   e.preventDefault();
//   auth.signOut();
//   console.log('User signed out!');
// })
