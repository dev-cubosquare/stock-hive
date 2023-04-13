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