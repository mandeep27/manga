jQuery(window).on('load', function () {
	jQuery("#preloader").fadeOut();
});
jQuery(function (jQuery) {
	//Preloader
	// Wow 
	wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: false, // default
		live: true // default
	})
	wow.init();
	// Bootstrap Slider 
	jQuery('.carousel').carousel({
		interval: 3000
		, cycle: true
	});
	/**** Team Slider ****/
	jQuery('#latest_slide').owlCarousel({
		autoplay: 3000
		, loop: true
		, margin: 10
		, responsiveClass: true
		, nav: true
		, responsive: {
			0: {
				items: 1
				, nav: true
			}
			, 600: {
				items: 2
				, nav: true
			}
			, 992: {
				items: 4
				, nav: true
			, }
		}
	})
	jQuery('#manga_slide').owlCarousel({
		autoplay: 3000
		, loop: true
		, margin: 10
		, responsiveClass: true
		, nav: true
		, responsive: {
			0: {
				items: 1
				, nav: true
			}
			, 600: {
				items: 2
				, nav: true
			}
			, 992: {
				items: 5
				, nav: true
			, }
		}
	})
	jQuery("nav a.nav-link").prepend("<span></span>");
	/**** Select Placeholder ****/
	jQuery('.contact_form select').change(function () {
		if (jQuery(this).children('option:first-child').is(':selected')) {
			jQuery(this).addClass('placeholder1');
		}
		else {
			jQuery(this).removeClass('placeholder1');
		}
	});
	try {
		var menu = $('.js-item-menu');
		var sub_menu_is_showed = -1;
		for (var i = 0; i < menu.length; i++) {
			$(menu[i]).on('click', function (e) {
				e.preventDefault();
				$('.js-right-sidebar').removeClass("show-sidebar");
				if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
					$(this).toggleClass('show-dropdown');
					sub_menu_is_showed = -1;
				}
				else {
					for (var i = 0; i < menu.length; i++) {
						$(menu[i]).removeClass("show-dropdown");
					}
					$(this).toggleClass('show-dropdown');
					sub_menu_is_showed = jQuery.inArray(this, menu);
				}
			});
		}
		$(".js-item-menu, .js-dropdown").click(function (event) {
			event.stopPropagation();
		});
		$("body,html").on("click", function () {
			for (var i = 0; i < menu.length; i++) {
				menu[i].classList.remove("show-dropdown");
			}
			sub_menu_is_showed = -1;
		});
	}
	catch (error) {
		console.log(error);
	}
	/**** dashboard menu *****/
	jQuery(".drop-down").click(function () {
		jQuery(this).next().toggle();
		jQuery(this).toggleClass("open");
	});
	/**** Textarea First Letter Capital ****/
	jQuery('textarea.form_control').on('keypress', function (event) {
		var $this = jQuery(this)
			, thisVal = $this.val()
			, FLC = thisVal.slice(0, 1).toUpperCase();
		con = thisVal.slice(1, thisVal.length);
		jQuery(this).val(FLC + con);
	});
});
/**** Custom Browse ****/
/**** Date picker *****/
jQuery(function () {
	jQuery("#datepicker1").datepicker();
});
$(document).on('click', '.browse', function () {
	var file = $(this).parent().parent().parent().find('.file');
	file.trigger('click');
});
$(document).on('change', '.file', function () {
	$(this).parent().find('.form_control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});