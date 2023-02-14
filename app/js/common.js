$(function() {

	// Custom JS
	$('.testimonials-owl').owlCarousel({
    loop:false,
    margin:24,
    nav:false,
    responsive:{
        0:{
            items:1,
						nav:false
        },
        600:{
            items:2,
						nav:false,
        },
        1000:{
            items:3,
						nav:false,
        }
    }
	})
	$('.partners-slider').owlCarousel({
    loop:false,
    margin:24,
		loop:true,
    nav: 1,
		dots: 1,
		navContainerClass: 'partners-controls owl-nav',
		navClass: ['btn btn-partner-control', 'btn btn-partner-control'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    },
		navText: [
			`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<line x1="5" y1="12" x2="11" y2="18"></line>
				<line x1="5" y1="12" x2="11" y2="6"></line>
			</svg>`, 
			`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<line x1="13" y1="18" x2="19" y2="12"></line>
				<line x1="13" y1="6" x2="19" y2="12"></line>
			</svg>`
		]
	})
	$('.step-owl').owlCarousel({
    loop:false,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    },
		navContainerClass: 'controls',
		navClass: ['btn', 'btn'],
		dotsClass: 'indicators',
		dotClass: 'indicator',
		stageOuterClass: 'step-stage owl-stage-outer',
		navText: [
			`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#14213D" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<line x1="5" y1="12" x2="11" y2="18"></line>
				<line x1="5" y1="12" x2="11" y2="6"></line>
			</svg>`, 
			`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#14213D" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<line x1="13" y1="18" x2="19" y2="12"></line>
				<line x1="13" y1="6" x2="19" y2="12"></line>
			</svg>`
		]
	})
	
	$( ".nav-toggle" ).click(function() {
		$( ".navbar-links" ).toggleClass( "mobile-show" );
		$( ".closer-icon" ).toggleClass( "closer-icon--show" );		
	});

	$(window).scroll(function(){
		var sticky = $('header.header'),
				scroll = $(window).scrollTop();
				heroSec = $('header.header').outerHeight();
	
		if (scroll > heroSec) sticky.addClass('header--dark header--fixed');
		else sticky.removeClass('header--dark header--fixed');
	});

	let form = $("#getquote");
	form.validate({
			errorPlacement: function errorPlacement(error, element) { element.before(error); },
			rules: {
					confirm: {
							equalTo: "#password"
					}
			}
	});

	$(".quote-wizard").steps({
    headerTag: ".h3",
    bodyTag: "section",
    autoFocus: true,
		labels: {
			cancel: "Отмена",
			current: "current step:",
			pagination: "Pagination",
			finish: "Получить расценку",
			next: "Далее",
			previous: "Назад",
			loading: "Загрузка ..."
		},
		enableFinishButton: true,
		onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
      alert("Submitted!");
    }

	});

	$(".megamenu-btn").click(function() {
		$(".service-megamenu").slideToggle('show');
		$(this).find('.icon').toggleClass('icon--rotate');
		$('.service-megamenu').toggleClass('service-megamenu--open');
		if($("header.header").hasClass("header--dark") && !$("header.header").hasClass("header--fixed")) {
			$("header.header").removeClass("header--dark");
		} else if(!$("header.header").hasClass("header--dark") && !$("header.header").hasClass("header--fixed")) {
			$("header.header").addClass("header--dark");
		}	
	});

	$("body").click(function(e) {
		if(!($(e.target).hasClass(".header--dark") || $(e.target).hasClass(".service-megamenu") || $(e.target).hasClass("megamenu-btn")) && $(".service-megamenu").hasClass("service-megamenu--open")) {
			$(".service-megamenu").slideUp('show');
			$(".megamenu-btn").find('.icon').removeClass('icon--rotate');
			if($("header.header").hasClass("header--dark") && !$("header.header").hasClass("header--fixed")) {
				$("header.header").removeClass("header--dark");
			} else if(!$("header.header").hasClass("header--dark") && !$("header.header").hasClass("header--fixed")) {
				$("header.header").addClass("header--dark");
			}
			$('.service-megamenu').removeClass('service-megamenu--open');
		}
	});

});
