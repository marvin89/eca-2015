(function($){

	$(document).ready(function() {

		var $menuToggle  = $('.right.menu.open > .toggle');
		$menuToggle.on('click', function() {
			$(this).toggleClass('open');
			$(this).find('.icon').toggleClass('sidebar remove');
			$('.ui.vertical.navbar.menu').toggleClass('hidden');
		});

		$('.ui.vertical.navbar.menu .item').on('click', function() {
			$menuToggle.trigger('click');
		});

	});

})(jQuery)
