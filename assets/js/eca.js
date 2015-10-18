(function($){

	$(document).ready(function() {

		var $menuToggle  = $('.right.menu.open > .item');
		$menuToggle.on('click', function() {
			$(this).toggleClass('open');
			$(this).find('.icon').toggleClass('sidebar remove');
			$('.ui.vertical.navbar.menu').toggleClass('hidden');
		});

	});

	$(window).load(function() {

		var editor;

	});

})(jQuery)
