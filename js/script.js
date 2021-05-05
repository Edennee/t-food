$(document).ready(function() {

  $('body').click(function(event) {
    $('.plate_img').removeClass('add_circle');
    $('.plate_desc_0').removeClass('unactive');
    $('.plate_desc_1').removeClass('active');
     $('.plate_desc_2').removeClass('active');
      $('.plate_desc_3').removeClass('active');
  });

  $('.plate_img_1').click(function(event) {
    event.stopPropagation();

    $('.plate_img_1').addClass('add_circle');
    $('.plate_img_2').removeClass('add_circle');
    $('.plate_img_3').removeClass('add_circle');

    $('.plate_desc_1').addClass('active');
     $('.plate_desc_2').removeClass('active');
      $('.plate_desc_3').removeClass('active');
      $('.plate_desc_0').addClass('unactive');
  });

  $('.plate_img_2').click(function(event) {
    event.stopPropagation();

    $('.plate_img_2').addClass('add_circle');
    $('.plate_img_1').removeClass('add_circle');
    $('.plate_img_3').removeClass('add_circle');

    $('.plate_desc_2').addClass('active');
     $('.plate_desc_1').removeClass('active');
      $('.plate_desc_3').removeClass('active');
      $('.plate_desc_0').addClass('unactive');
  });

  $('.plate_img_3').click(function(event) {
    event.stopPropagation();

    $('.plate_img_3').addClass('add_circle');
    $('.plate_img_1').removeClass('add_circle');
    $('.plate_img_2').removeClass('add_circle');

    $('.plate_desc_3').addClass('active');
     $('.plate_desc_1').removeClass('active');
      $('.plate_desc_2').removeClass('active');
      $('.plate_desc_0').addClass('unactive');
  });
});