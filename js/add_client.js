if (localStorage.getItem('role')) {
    if (localStorage.getItem('role') == 'Admin') {} else if (localStorage.getItem('role') == 'Frontdesk') {
        $('#menu-add-employee').css('display', 'none');
        $('#menu-adjust-time').css('display', 'none');
    } else {
        location.replace('https://portal.mbvgroup.in/login.html');
    }
} else {
    location.replace('https://portal.mbvgroup.in/login.html');
}

$('#add-client-btn').on('click', function(event) {
    event.preventDefault();

    var username = $('#username').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var membership = $('#membership').val();
    var startdate = $('#start-date').val();
    var enddate = $('#end-date').val();
    var tstartdate = $('#t-start-date').val();
    var tenddate = $('#t-end-date').val();
    // var now = new Date();
    // const tenddate_formatted = new Date(tendate);
    // var check = now > tenddate_formatted;
    // console.log(check);
    console.log(username, email, phone, membership, startdate, endate, tstartdate, tenddate);
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
            success: function(response) {
                console.log(response);
                console.log(response.status);
                var r = JSON.parse(response);
                console.log(r.status);
                if ((r.status = 0)) {
                    $.ajax({
                        url: 'https://portal.mbvgroup.in/websiteapi/api9.php?user=' +
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
                            tenddate,
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
                        success: function(response) {
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
                        error: function(xhr, status) {
                            console.log('error', xhr, status);
                        },
                    });
                } else {
                    $.ajax({
                        url: 'https://portal.mbvgroup.in/websiteapi/api10.php?user=' +
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
                            tenddate,
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
                        success: function(response) {
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
                        error: function(xhr, status) {
                            console.log('error', xhr, status);
                        },
                    });
                }
            },
            error: function(xhr, status) {
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

$('#populate-btn').on('click', function(event) {
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
            success: function(response) {
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
                    var start = new Date(r.startd);
                    var end = new Date(r.endd);
                    var tstart = new Date(r.tstart);
                    var tend = new Date(r.tend);
                    $('#start-date').val(start);
                    $('#end-date').val(end);
                    $('#t-start-date').val(tstart);
                    $('#t-end-date').val(tend);
                    //Image apply
                    var pp = r.pp.replace('\\', '');
                    $('#image').attr('src', `data:image/png;base64,${pp}`);
                }
            },
            error: function(xhr, status) {
                console.log('error', xhr, status);
                alert('Some unknown error occured');
            },
        });
    } else {
        alert('Please enter username to populate');
    }
});

$('#reset-btn').on('click', function(event) {
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
            success: function(response) {
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
            error: function(xhr, status) {
                console.log('error', xhr, status);
                alert('Some unknown error occured');
            },
        });
    } else {
        alert('Please enter username to populate');
    }
});