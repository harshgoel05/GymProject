$('#reset-btn').on('click', function (event) {
	event.preventDefault();

	var username = $('#username').val();
	var pass = $('#pass').val();
	var url = 'http://gymworkout.pe.hu/api/api12.php?user=' + username + '&pass=' + pass;
	if (username && pass) {
		$.ajax({
			url: url,
			type: 'GET',
			crossDomain: true,
			headers: {
				accept: 'text/html; charset=UTF-8',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'Access-Control-Allow-Origin': '*',
			},
			options: {
				mode: 'no-cors',
			},
			success: function (response) {
				console.log(response);
				console.log(response.status);
				var r = JSON.parse(response);
				console.log(r.status);
				if (r.status == 0) {
					alert('Some error occured!');
				} else {
					alert('Successfully changed password!');
				}
			},
			error: function (xhr, status) {
				console.log('error', xhr, status);
				alert('Some unknown error occured');
			},
		});
	} else {
		alert('Please enter all details!');
	}
});
