$(function() {
  $('#change-color').on('click',function() {
    $('#target').css('color','red');
  });
  $('#change-text').on('click',function() {
    $('#target').text('Hello!!!');
  });
  $('#fade-out').on('click',function() {
    $('#target').fadeOut(3000);
  });
  $('#fade-in').on('click',function() {
    $('#target').fadeIn(3000);
  });
});
