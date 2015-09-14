'use strict';

var $redLink = $('#red-link');
var $greenLink = $('#green-link');
var $blueLink = $('#blue-link');
var $redSection = $('#red');
var $greenSection = $('#green');
var $blueSection = $('#blue');

// $('#red-link').click(function() {
//   $( '#red' ).show();
//   $( '#green' ).hide();
//   $( '#blue' ).hide();
//   this.style.backgroundColor = '#ccc';
//   ($greenLink).css('backgroundColor', 'white');
//   ($blueLink).css('backgroundColor', 'white');
// });

$redLink.click(function() {
  $redSection.show();
  $greenSection.hide();
  $blueSection.hide();
  this.style.backgroundColor = '#ccc';
  $greenLink.css('backgroundColor', 'white');
  $blueLink.css('backgroundColor', 'white');
});


$greenLink.click(function() {
  $greenSection.show();
  $redSection.hide();
  $blueSection.hide();
  this.style.backgroundColor = '#ccc';
  $redLink.css('backgroundColor', 'white');
  $blueLink.css('backgroundColor', 'white');
});


$blueLink.click(function() {
  $blueSection.show();
  $redSection.hide();
  $greenSection.hide();
  this.style.backgroundColor = '#ccc';
  $redLink.css('backgroundColor', 'white');
  $greenLink.css('backgroundColor', 'white');
});

