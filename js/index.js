$("#moveToExp").on('click', function(e) {
	e.preventDefault();
	scrollSpyToSection("#expSection");
});

$("#moveToPersonalProject").on('click', function(e) {
	e.preventDefault();
	scrollSpyToSection("#personalProjectSection");
});

$("#moveToContact").on('click', function(e) {
	e.preventDefault();
	scrollSpyToSection("#contactSection");
});

$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
		
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
			}, 1000);
		return false;
	});
});

function scrollSpyToSection(section){
	$('html, body').animate({
		scrollTop: $(section).offset().top
	}, 1000);
}