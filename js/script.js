$('#login-btn').on('click', function (event) {
	event.preventDefault();

	var email = $('#email').val();
	var pass = $('#pass').val();
	var url = 'http://gymworkout.pe.hu/api/api1.php?user=' + email + '&pass=' + pass;
	// url = 'https://quotes.rest/qod?language=en';
	if (email && pass) {
		$.ajax({
			url: url,
			type: 'GET',
			crossDomain: true,
			success: function (response) {
				console.log(response);
			},
			error: function (xhr, status) {
				console.log('error', xhr, status);
			},
		});
	} else {
		alert('Please enter all the details');
	}
});
