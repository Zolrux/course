import $ from 'jquery';

$(document).ready(function() {
	$('.list-item:first-child').hover(function() {
		$(this).toggleClass('active');
	});

	$('.list-item:eq(2)').on('click', function() {
		$('img:even').fadeToggle('slow');
	});

	$('.list-item:eq(4)').on('click', function() {
		$('img:odd').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 2000);
	});

	$('.scroll-top').on('click', function() {
		console.log(this);
		$('body').animate({
			scrollTop: 0
		}, 5000);
	});
});
