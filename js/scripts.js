/**
 * Project: StockHive
 * File: styles.scss
 * Author: Shahzar Mazhar
 * Date: 2023-04-13
 * Modified: 2023-04-13
 * Description: This file contains the main styles for the project and imports all the other scss files
 * Version: 1.0.0
 */




// get all hexagons placeholders
const hexagons = document.querySelectorAll('.hexagon');

// add span to each hexagon in the start
hexagons.forEach(hexagon => {
  
  // create svg element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg',);
  svg.setAttribute('viewBox', '0 0 300 300');
  svg.innerHTML = `
  <g>
  <path d="M280 225 150 300 20 225V75L150 0 280 75V225Z" />
  </g>
  `;
  
  // get immidiate child of hexagon
  const immidiateChild = hexagon.firstElementChild;


  // check if immidiate child is not null
  if (immidiateChild && immidiateChild.tagName === 'A') {

    // insert svg before immidiate child
    immidiateChild.insertAdjacentElement('afterbegin', svg);
  } else {

    // otherwise insert svg in the start of hexagon
    hexagon.insertAdjacentElement('afterbegin', svg);
  }
});


var copyBtn = document.querySelector('#copy-code');

if(copyBtn !== null){
  copyBtn.addEventListener('click', function() {
    var copyText = copyBtn.textContent;

    navigator.clipboard.writeText(copyText).then(function() {
      var popup = document.createElement('div');
      popup.classList.add('popup-notification');
      popup.textContent = 'Copied';
      document.body.appendChild(popup);
      setTimeout(function() {
        popup.remove();
      }
      , 2000);
    });
  
  });
}

jQuery(function($) {
  $('#send-btn').click(function(e) {
    e.preventDefault(); // Prevent the form from submitting
    $('#contact-hide').hide(); // Hide the contact form
    $('.thank-you').show(); // Show the thank-you message
  });


  $('#open-menu').click(function(){
   $('#mobile-menu').show(function(){
    $(this).css('transform', 'translateX(0)')
   });
  })

  $('.sec1-responsive-hidden-menu-wrapper').click(function(){
    $('#mobile-menu').css('transform', 'translateX(-100%)');
    // setTimeout(() => {
    //   $('#mobile-menu').hide(function(){
    // }, 300);
    // });
   })

  $('.sec1-responsive-hidden-menu').click(function(e){
    e.stopPropagation();
  })

  $('.landpg2-sec3-tiles .tiles').click('.hexagon', function(){

    if($(this).hasClass('expand')){
      $(this).find('.answer').slideUp(300, () => {
        $(this).removeClass('expand');
      })
    }else{
      $(this).addClass('expand');
      $(this).find('.answer').slideDown(300);
    }


  });

  $(document).ready(function() {
    $(".div3-left .hexagon").click(function() {
      $(".div3-left-subcontainer").slideToggle();
      $(".tiles-sec4").toggleClass("expand");
    });
  
    $(".div3-right .hexagon").click(function() {
      $(".div3-right-subcontainer").slideToggle();
      $(".tiles-sec4-2").toggleClass("expand");
    });
  });
  
  

});



// $(document).ready(function() {
//   $('#send-btn').click(function(e) {
//     e.preventDefault(); // Prevent the form from submitting
//     $('.contacts__form').hide(); // Hide the contact form
//     $('.thank-you').show(); // Show the thank-you message
//   });
// });