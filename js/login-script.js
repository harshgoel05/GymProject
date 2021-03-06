$('#login-btn').on('click', function (event) {
	event.preventDefault();
	var email = $('#email').val();
	var pass = $('#pass').val();
	var url = 'https://portal.mbvgroup.in/websiteapi/api1.php?user=' + email + '&pass=' + pass;
	if (email && pass) {
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
				localStorage.setItem('status', r.status);
				localStorage.setItem('role', r.role);
				localStorage.setItem('user', email);
				location.replace('https://portal.mbvgroup.in/client.html');
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
// FrontDesk => Add client, Trainer ( employee, time)
// Admin => All menus

$('#logout-btn').click(function () {
	localStorage.removeItem('status');
	localStorage.removeItem('role');
	localStorage.removeItem('user');
	location.replace('https://portal.mbvgroup.in/login.html');
});
