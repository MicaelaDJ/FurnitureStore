$(document).ready(function() {

    let request = new XMLHttpRequest();
    const url = `http://api.betterdoctor.com/2016-03-01/doctors?location=${city}&appid=${process.env.API_KEY}`;
    var doctor_uid = '333d4bb6fcf640e18e93b11b00fe09eb'
var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors/'+ doctor_uid + '?user_key=' + api_key; 
    $.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
});
});
