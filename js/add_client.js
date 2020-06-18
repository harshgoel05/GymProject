$('#add-client-btn').on('click', function (event) {
	event.preventDefault();

	var username = $('#username').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var membership = $('#membership').val();
	console.log(username, email, phone, membership);
	var url = 'http://gymworkout.pe.hu/api/api8.php?user=' + username;
	if (username && email && phone && membership) {
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
				if ((r.status = 0)) {
					$.ajax({
						url:
							'http://gymworkout.pe.hu/api/api9.php?user=' +
							username +
							'&email=' +
							email +
							'&ph=' +
							phone +
							'&type=' +
							membership,
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
							if ((r.status = 1)) {
								alert('Success!');
							} else {
								alert('Failed!');
							}
						},
						error: function (xhr, status) {
							console.log('error', xhr, status);
						},
					});
				} else {
					$.ajax({
						url:
							'http://gymworkout.pe.hu/api/api5.php?user=' +
							username +
							'&email=' +
							email +
							'&ph=' +
							phone +
							'&type=' +
							membership,
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
							if ((r.status = 1)) {
								alert('Success!');
							} else {
								alert('Failed!');
							}
						},
						error: function (xhr, status) {
							console.log('error', xhr, status);
						},
					});
				}
			},
			error: function (xhr, status) {
				console.log('error', xhr, status);
				alert('Some unknown error occured');
			},
		});
	} else {
		alert('Please enter all the details');
	}
});

// $(document).ready(function () {
// 	var stat = localStorage.getItem('status');
// 	if (stat != 1) {
// 		location.replace('http://gymworkout.pe.hu/web_portal/login.html?');
// 	}
// });

$('#populate-btn').on('click', function (event) {
	event.preventDefault();

	var username = $('#username').val();
	var url = 'http://gymworkout.pe.hu/api/api7.php?user=' + username;
	if (username) {
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
					alert('User does not exists!');
				} else {
					$('#email').val(r.email);
					if (r.type == 'U1') {
						$('#membership').val('General Membership');
					} else if (r.type == 'U2') {
						$('#membership').val('Trainer - 36 session');
					} else if (r.type == 'U3') {
						$('#membership').val('Daily Training');
					}
					$('#phone').val(r.phone);
					//Image apply left
					$('#image').attr('src', `data:image/png;base64,${r.pp}`);
				}
			},
			error: function (xhr, status) {
				console.log('error', xhr, status);
				alert('Some unknown error occured');
			},
		});
	} else {
		alert('Please enter username to populate');
	}
});

$('#reset-btn').on('click', function (event) {
	event.preventDefault();

	var username = $('#username').val();
	var url = 'http://gymworkout.pe.hu/api/api11.php?user=' + username;
	if (username) {
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
					alert('Success!');
				}
			},
			error: function (xhr, status) {
				console.log('error', xhr, status);
				alert('Some unknown error occured');
			},
		});
	} else {
		alert('Please enter username to populate');
	}
});
