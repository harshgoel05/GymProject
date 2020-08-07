$('#populate-btn').on('click', function (event) {
	event.preventDefault();

	var username = $('#username').val();
	var startdate = $('#startdate').val();
	var enddate = $('#enddate').val();

	function formatDate(input) {
		var datePart = input.match(/\d+/g),
			year = datePart[0];
		(month = datePart[1]), (day = datePart[2]);

		return day + '.' + month + '.' + year;
	}
	if (username && startdate && enddate) {
		var fstart = formatDate(startdate);
		var fend = formatDate(enddate);
		console.log(fstart, fend);
		var url = 'https://portal.mbvgroup.in/websiteapi/api12.php?user=' + username + '&std=' + fstart + '0&etd=' + fend;
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
					if (r.counted == 0) {
						alert('Not exists!');
					}
					$('#counted').html(r.counted);
				}
			},
			error: function (xhr, status) {
				console.log('error', xhr, status);
				alert('Some unknown error occured');
			},
		});
	} else {
		alert('Please enter all details to populate');
	}
});
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
