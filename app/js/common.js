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

});
