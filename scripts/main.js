'use strict';

var $redLink = $('#red-link');
var $greenLink = $('#green-link');
var $blueLink = $('#blue-link');
var $redSection = $('#red');
var $greenSection = $('#green');
var $blueSection = $('#blue');

$('#red-link').click(function() {
  $( '#red' ).show();
  $( '#green' ).hide();
  $( '#blue' ).hide();
  this.style.backgroundColor = '#ccc';
  ($greenLink).css('backgroundColor', 'white');
  ($blueLink).css('backgroundColor', 'white');
});


$( '#green-link' ).click(function() {
  $( '#green' ).show();
  $( '#red' ).hide();
  $( '#blue' ).hide();
  this.style.backgroundColor = '#ccc';
  ($redLink).css('backgroundColor', 'white');
  ($blueLink).css('backgroundColor', 'white');
});


$( '#blue-link' ).click(function() {
  $( '#blue' ).show();
  $( '#red' ).hide();
  $( '#green' ).hide();
  this.style.backgroundColor = '#ccc';
  ($redLink).css('backgroundColor', 'white');
  ($greenLink).css('backgroundColor', 'white');
});

