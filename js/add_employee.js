$('#loggedinas').html(localStorage.getItem('role'));

$('#add-employee-btn').on('click', function (event) {
	event.preventDefault();

	var username = $('#username').val();
	var pass = $('#pass').val();
	var role = $('#role').val();
	var gym = $('#gym').val();
	console.log(username, pass, role, gym);
	var url = 'https://portal.mbvgroup.in/websiteapi/api3.php?user=' + username;
	if (username && pass && role && gym) {
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
						url: 'https://portal.mbvgroup.in/websiteapi/api4.php?user=' + username + '&pass=' + pass + '&rl=' + role + '&gym=' + gym,
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
						url: 'https://portal.mbvgroup.in/websiteapi/api5.php?user=' + username + '&pass=' + pass + '&rl=' + role + '&gym=' + gym,
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
	var url = 'https://portal.mbvgroup.in/websiteapi/api6.php?user=' + username;
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
					$('#pass').val(r.password);
					$('#role').val(r.role);
					$('#gym').val(r.gym);
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

if (localStorage.getItem('role')) {
	if (localStorage.getItem('role') == 'Admin') {
	} else if (localStorage.getItem('role') == 'Frontdesk') {
		$('#menu-add-employee').css('display', 'none');
		$('#menu-adjust-time').css('display', 'none');
		location.replace('https://portal.mbvgroup.in/client.html');
	} else {
		location.replace('https://portal.mbvgroup.in/login.html');
	}
} else {
	location.replace('https://portal.mbvgroup.in/login.html');
}
