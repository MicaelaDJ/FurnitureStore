import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Lookup from './lookup.js';

$(document).ready(function() {
  $('#Search').submit(function(event) {
    event.preventDefault;
    let issue = $('#Issue').val();
    let doctor = $('#Doctor').val();

    let lookup = new Lookup();
    let promise = lookup.returnSearch(issue, doctor);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body)
      for(let i = 0; i < body.data.length; i++){
        if (body.data[i].practices[0].website === undefined) {
          $('.showDoctor').append(`Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} <br>Street: ${body.data[i].practices[0].visit_address.street},<br> City/State/Zip: ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}<br>Phone Number: ${body.data[i].practices[0].phones[0].number}<br>Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}<br><br>`);
          console.log("Dr. " + body.data[i].profile.last_name + " is available.");
        } else {
          $('.showDoctor').append(`Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} <br>Street: ${body.data[i].practices[0].visit_address.street},<br> City/State/Zip: ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}<br>Phone Number: ${body.data[i].practices[0].phones[0].number}<br>Website: ${body.data[i].practices[0].website}<br>Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}<br><br>`);
          console.log("Dr. " + body.data[i].profile.last_name + " is available.");
        }

      }
    }, function(error) {
      $('.showErrors').append(`There was an error processing your request: ${error.message}`);
    });
    return false;
  });
});
