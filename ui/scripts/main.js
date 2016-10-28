var popup;

$(function() {


	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {
			$('.thumbnails').poptrox({
				onPopupClose: function() {
					$body.removeClass('is-covered'); 
				},
				onPopupOpen: function() {
					swal({
						  title: "Start the quiz.",
					      text: "Are you sure?",
					      type: "info",
						  showCancelButton: true,
					      confirmButtonColor: "#DD6B55",
						  confirmButtonText: "Yes!",
						  cancelButtonText: "No!",
						  closeOnConfirm: false,
						  closeOnCancel: false,
					},
						  function(isConfirm){
							$body.addClass('is-covered');
						  	if (isConfirm) {
								swal({   title: "Redirecting you...",   text: "Hold you please, thanks :)",   timer: 1000,   showConfirmButton: false });
								setTimeout(window.location.href = "quiz.html",2000)
						   }
						   else {
								swal("Its okay!", "We cancelled it!", "info")
						   } 
						  }
						);
				},
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.1,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50),
			})

		});
});



/*
var popup;

$(function() {


	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			alert('ehhlo')
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {
			$('.thumbnails').poptrox({
				onPopupClose: function() {
					$body.removeClass('is-covered'); 
				},
				onPopupOpen: function() {
					$body.addClass('is-covered');
					popup = true;
				},
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.1,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50),
			})

		});
});
*/