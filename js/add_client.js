if (localStorage.getItem('role')) {
	if (localStorage.getItem('role') == 'Admin') {
	} else if (localStorage.getItem('role') == 'Frontdesk') {
		$('#menu-add-employee').css('display', 'none');
		$('#menu-adjust-time').css('display', 'none');
	} else {
		location.replace('https://portal.mbvgroup.in/login.html');
	}
} else {
	location.replace('https://portal.mbvgroup.in/login.html');
}
var loginemail = localStorage.getItem('user');

$('#add-client-btn').on('click', function (event) {
	event.preventDefault();

	var ausername = $('#username').val();
	var aemail = $('#email').val();
	var aphone = $('#phone').val();
	var amembership = $('#membership').val();
	var astartdate = $('#start-date').val();
	var aenddate = $('#end-date').val();
	var atstartdate = $('#t-start-date').val();
	var atenddate = $('#t-end-date').val();

	var username = ausername.split('-').reverse().join('-');
	var email = aemail.split('-').reverse().join('-');
	var phone = aphone.split('-').reverse().join('-');
	var membership = amembership.split('-').reverse().join('-');
	var startdate = astartdate.split('-').reverse().join('-');
	var enddate = aenddate.split('-').reverse().join('-');
	var tstartdate = atstartdate.split('-').reverse().join('-');
	var tenddate = atenddate.split('-').reverse().join('-');
	// var f_tenddate = tenddate.split('-').reverse().join('-');
	// const tenddate_formatted = new Date(f_tenddate);
	const now = new Date();
	var check = now > new Date(tenddate);
	if (check) {
		var stat = 0;
	} else {
		var stat = 1;
	}

	console.log(check);
	console.log(username, email, phone, membership, startdate, enddate, tstartdate, tenddate);
	var url = 'https://portal.mbvgroup.in/websiteapi/api8.php?user=' + username;
	if (username && email && phone && membership && startdate && enddate && tstartdate && tenddate) {
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
					$.ajax({
						url:
							'https://portal.mbvgroup.in/websiteapi/api9.php?user=' +
							username +
							'&email=' +
							email +
							'&ph=' +
							phone +
							'&type=' +
							membership +
							'&startdate=' +
							startdate +
							'&enddate=' +
							enddate +
							'&tstartdate=' +
							tstartdate +
							'&tenddate=' +
							tenddate +
							'&tcheck=' +
							stat +
							'&euser=' +
							loginemail,
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
							if (r.status == 1) {
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
							'https://portal.mbvgroup.in/websiteapi/api10.php?user=' +
							username +
							'&email=' +
							email +
							'&ph=' +
							phone +
							'&type=' +
							membership +
							'&startdate=' +
							startdate +
							'&enddate=' +
							enddate +
							'&tstartdate=' +
							tstartdate +
							'&tenddate=' +
							tenddate +
							'&tcheck=' +
							stat,
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
							if (r.status == 1) {
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
	var url = 'https://portal.mbvgroup.in/websiteapi/api7.php?user=' + username;
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
					// if (r.type == 'U1') {
					// 	$('#membership').val('General Membership');
					// } else if (r.type == 'U2') {
					// 	$('#membership').val('Trainer - 36 session');
					// } else if (r.type == 'U3') {
					// 	$('#membership').val('Daily Training');
					// }
					$('#membership').val(r.type);
					$('#phone').val(r.phone);
					var start = r.startd;
					var end = r.endd;
					var tstart = r.tstart;
					var tend = r.tend;
					var newstart = start.split('-').reverse().join('-');
					var newend = end.split('-').reverse().join('-');
					var newtstart = tstart.split('-').reverse().join('-');
					var newtend = tend.split('-').reverse().join('-');
					// Need to format
					$('#start-date').val(newstart);
					$('#end-date').val(newend);
					$('#t-start-date').val(newtstart);
					$('#t-end-date').val(newtend);
					//Image apply
					var pp = r.pp.replace('\\', '');
					$('#image').attr('src', `data:image/png;base64,${pp}`);
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
	var url = 'https://portal.mbvgroup.in/websiteapi/api11.php?user=' + username;
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

$('#logout-btn').click(function () {
	localStorage.removeItem('status');
	localStorage.removeItem('role');
	localStorage.removeItem('user');
	location.replace('https://portal.mbvgroup.in/login.html');
});
