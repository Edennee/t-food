$(document).ready(function() {

	$('.header_burger').click(function(event) {
		$('.header_burger, .nav').toggleClass('active');
		$('.burger_bg').toggleClass('remove_bg');
		$('.body').toggleClass('lock');

	});

	$('.nav_link').click(function(event) {
		$('.header_burger, .nav').removeClass('active');
		$('body').removeClass('lock');
		$('.burger_bg').toggleClass('remove_bg');
	});
});
