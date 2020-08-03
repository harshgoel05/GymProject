$(document).ready(function () {
	$('#sidebar').mCustomScrollbar({
		theme: 'minimal',
	});

	$('#dismiss, .overlay').on('click', function () {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});
let clicked = 0;
$('#create-btn').click(function () {
	event.preventDefault();
	if ($('#no-of-slot').val() > 30 || $('#no-of-slot').val() <= 0) {
		var time_elements = $('.time-form');
		for (let i = 0; i < time_elements.length; i++) {
			$('#' + time_elements[i].id).removeClass('active');
		}
		alert('The slots must be between 1 and 30');
	} else {
		if (clicked == 0) {
			var time_elements = $('.time-form');
			for (let i = 0; i < $('#no-of-slot').val(); i++) {
				$('#' + time_elements[i].id).addClass('active');
			}
			clicked = 1;
		} else {
			var time_elements = $('.time-form');
			for (let i = 0; i < time_elements.length; i++) {
				$('#' + time_elements[i].id).removeClass('active');
			}
			for (let i = 0; i < $('#no-of-slot').val(); i++) {
				$('#' + time_elements[i].id).addClass('active');
			}
			clicked = 1;
		}
		$('#btn-cont').addClass('active');
	}
});

$('#submit-btn').click(function () {
	var type = $('.type-f');
	var minutes = $('.minutes-f');
	var hours = $('.hours-f');

	for (let i = 0; i < type.length; i++) {
		console.log(type[i].value);
	}
	for (let i = 0; i < minutes.length; i++) {
		console.log(minutes[i].value);
	}
	for (let i = 0; i < hours.length; i++) {
		console.log(hours[i].value);
	}
});
