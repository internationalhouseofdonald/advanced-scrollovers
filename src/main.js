import './styles.css';
import './styles.scss';
import video from './components/development/bham.mp4';

$(document).ready(function() {
  var cards = document.getElementsByClassName('card');
  var offsets = new Array;
  Object.keys(cards).forEach(function(element) {
    offsets.push(cards[element].offsetTop);
  });
  console.log(offsets);
  
  $(document).on("scroll", function() {
    var posY = window.scrollY + 280;
    console.log(posY);
    offsets.forEach(function(element, index) {
      if (posY > element) {
        console.log("Element " + index + " is in viewport");
      }
    })
  });

});






// use jQuery easing to animate scrollovers into place