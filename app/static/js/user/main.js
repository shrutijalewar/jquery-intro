/*global $, document*/

(function(){
'use strict';

var a = 3,
    b = 2;

  $(document).ready(initialize);

  function initialize(){
    $('div').css('color','red');
    $('h2').text('Shruti');
    $('h2').css('font-size','50px');
    $('h2').fadeOut(2000);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');
    console.log('the dom is now ready!');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(makeColor);
    $('#fadeOut').click(fadeout);
    $('#fadeIn').click(fadein);

  }

  function makeRed(){

    $('body').css('background-color', 'red');
    console.log('you are spammed!');
  }

  function makeYellow(){

    $('body').css('background-color', 'yellow');
    console('you are spammed!');
  }
  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
    console.log('you are spammed!');
  }

  function fadein(){
  var num = $('#fadeTime').val() *1;
  $('footer').fadeIn(num);
  }
  function fadeout(){
  var num = $('#fadeTime').val() *1;
  $('footer').fadeOut(num);
  }
  console.log('the dom is not ready!');

  console.log(a,b);
})();

