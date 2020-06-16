$('#login-btn').on('click', function (event) {
	event.preventDefault();

	var email = $('#email').val();
	var pass = $('#pass').val();
	var url = 'http://gymworkout.pe.hu/api/api1.php?user=' + email + '&pass=' + pass;
	if (email && pass) {
		$.ajax({
			method: 'POST',
			url: url,
			headers: { 'Content-Type': 'application/json' },

			success: function (result) {
				alert(result);
				window.location.replace('https://google.com');
			},
		});
	} else {
		alert('Please enter all the details');
	}
});
