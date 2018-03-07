$(function() {
	var link = $('.menu__icon');
	var menu = $('.menu__links');
	var close= $('.menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('active');
		close.toggleClass('active');
	});
});
