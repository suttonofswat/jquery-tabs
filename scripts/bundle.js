(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

$redLink.click(function () {
  $redSection.show();
  $greenSection.hide();
  $blueSection.hide();
  this.style.backgroundColor = '#ccc';
  $greenLink.css('backgroundColor', 'white');
  $blueLink.css('backgroundColor', 'white');
});

$greenLink.click(function () {
  $greenSection.show();
  $redSection.hide();
  $blueSection.hide();
  this.style.backgroundColor = '#ccc';
  $redLink.css('backgroundColor', 'white');
  $blueLink.css('backgroundColor', 'white');
});

$blueLink.click(function () {
  $blueSection.show();
  $redSection.hide();
  $greenSection.hide();
  this.style.backgroundColor = '#ccc';
  $redLink.css('backgroundColor', 'white');
  $greenLink.css('backgroundColor', 'white');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map