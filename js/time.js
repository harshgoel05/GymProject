$(document).ready(function() {
    $('#sidebar').mCustomScrollbar({
        theme: 'minimal',
    });

    $('#dismiss, .overlay').on('click', function() {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
let clicked = 0;
$('#create-btn').click(function() {
    event.preventDefault();
    if ($('#no-of-slot').val() > 30 || $('#no-of-slot').val() <= 0) {
        var time_elements = $('.time-form');
        for (let i = 0; i < time_elements.length; i++) {
            $('#' + time_elements[i].id).removeClass('active');
        }
        alert('The slots must be between 1 and 30');
    } else {
        if (clicked == 0) {
            var time_elements = $('.time-form');
            for (let i = 0; i < $('#no-of-slot').val(); i++) {
                $('#' + time_elements[i].id).addClass('active');
            }
            clicked = 1;
        } else {
            var time_elements = $('.time-form');
            for (let i = 0; i < time_elements.length; i++) {
                $('#' + time_elements[i].id).removeClass('active');
            }
            for (let i = 0; i < $('#no-of-slot').val(); i++) {
                $('#' + time_elements[i].id).addClass('active');
            }
            clicked = 1;
        }
        $('#btn-cont').addClass('active');
    }
});

$('#submit-btn').click(function() {
    var type = $('.type-f');
    var minutes = $('.minutes-f');
    var hours = $('.hours-f');
    var total = $('#no-of-slot').val();
    var sub_url = '';
    let time_arr = [];
    var mor = 0,
        eve = 0,
        aft = 0;
    for (let i = 0; i < total; i++) {
        if (type[i].value == 'Morning') mor++;
        else if (type[i].value == 'Evening') eve++;
        else if (type[i].value == 'Afternoon') aft++;
    }
    for (let i = 0; i < total; i++) {
        time_arr[i] = hours[i].value.toString();
    }
    for (let i = 0; i < total; i++) {
        // console.log(minutes[i].value);
        time_arr[i] = time_arr[i].toString() + minutes[i].value.toString();
    }
    var gymc = $('#gym').val();
    var psm = $('#psm').val();

    for (let i = 0; i < time_arr.length; i++) {
        time_arr[i] = '&s' + i + '=' + time_arr[i];
        sub_url = sub_url + time_arr[i];
    }
    //Change url here
    $.ajax({
        url: 'https://portal.mbvgroup.in/websiteapi/api13.php?' +
            'gymc=' +
            gymc +
            '&psm=' +
            psm +
            '&total=' +
            total +
            '&mor=' +
            mor +
            '&aft=' +
            aft +
            '&eve=' +
            eve +
            sub_url,
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
                alert('Successfully changed password!');
            }
        },
        error: function(xhr, status) {
            console.log('error', xhr, status);
            alert('Some unknown error occured');
        },
    });
});