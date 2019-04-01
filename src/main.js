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
      $('.showDoctor').text(`The doctors available to help you are ${body}`);
      for(let i = 0; i < body.data.length; i++){
        console.log("Dr. " + body.data[i].profile.last_name + " is available.");
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    return false;
  });
});
