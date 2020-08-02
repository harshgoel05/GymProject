if (localStorage.getItem('role')) {
	if (localStorage.getItem('role') == 'Admin') {
	} else if (localStorage.getItem('role') == 'Frontdesk') {
		location.replace('http://portal.mbbgroup.in/client.html');
	} else {
		location.replace('http://portal.mbbgroup.in/login.html');
	}
} else {
	location.replace('http://portal.mbbgroup.in/login.html');
}
if (localStorage.getItem('role')) {
	if (localStorage.getItem('role') == 'Admin') {
	} else if (localStorage.getItem('role') == 'Frontdesk') {
		$('#menu-add-employee').css('display', 'none');
		$('#menu-adjust-time').css('display', 'none');
	} else {
		location.replace('http://portal.mbbgroup.in/login.html');
	}
} else {
	location.replace('http://portal.mbbgroup.in/login.html');
}