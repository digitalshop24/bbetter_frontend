// $(document).ready(function(){
//   $('.beforeAfter').slick({
//   	slidesToShow: 1,
//   	slidesToScroll: 1,
//   	arrows: true,
//     responsive: [{
//       breakpoint: 768,
//       settings: {
//          arrows: false,
//          dots:true
//       }
//     }
//     ]});

//   $('.partners').slick({
//   	slidesToShow: 4,
//   	slidesToScroll: 4,
//     responsive: [{
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false
//       }
//     }
//     ]});
//   $('.tariffs').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots:true
//   });

//     $('.feedbackCarousel').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false
//       }
//     }
//     ]});

// });

// [].forEach.call( document.querySelectorAll('.hide-radio'), function(element) {
// element.style.display = 'none';
// });

function thankU() {
  $( "div.thankU" ).css( "display", "block" );
  $( "div.formWrapper" ).css( "display", "none" );
};

// jQuery(document).ready(function() {
//   jQuery(".eTimer").eTimer({
//     etType: 0, etDate: "27.06.2016.0.0", etTitleText: "Старт сезона 27.06.16",etShowSign: 1, etSep: ":", etTextColor: "#fff",etLastUnit: 3, etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "white", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white"
//   });
// });

// $(function() {
//   $('a.navWlaker[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

$('.accordion li').click(function(e) {
    e.preventDefault(); //prevent the link from being followed
    $('.accordion li').removeClass('active');
    $(this).addClass('active');
    console.log('kbjsdjfjkds');
});

