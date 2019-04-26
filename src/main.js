import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Store from './store.js';

$(document).ready(function() {
  $('#Search').submit(function(event) {
    event.preventDefault;
    let furnitureType = $('#FurnitureType').val();

    let store = new Store();
    let promise = store.returnSearch(furnitureType);
    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body)
      for(let i = 0; i < body.body.data.length; i++){

        let item = body.body.data[i].type.includes(furnitureType)
        if (item === true && body.body.data[i].stock < 1) {
          $('.showFurnitureType').append(`<br>${body.body.data[i].name} <br> <img src=${body.body.data[i].imageUrl}> <br> ${body.body.data[i].description} <br> The available colors for this item are: ${body.body.data[i].colors}<br>Im sorry this item is out of stock at the moment<br><hr>`)
        } else if (item === true && body.body.data[i].stock > 0 && body.body.data[i].deliverable === true) {
          $('.showFurnitureType').append(`<br>${body.body.data[i].name} <br> <img src=${body.body.data[i].imageUrl}> <br> ${body.body.data[i].description} <br> The available colors for this item are: ${body.body.data[i].colors}<br>This item can be delivered!<br>There are ${body.body.data[i].stock} available<br><br><hr>`)
        } else if (item === true && body.body.data[i].deliverable !== true) {
          $('.showFurnitureType').append(`<br>${body.body.data[i].name} <br> <img src=${body.body.data[i].imageUrl}> <br> ${body.body.data[i].description} <br> The available colors for this item are: ${body.body.data[i].colors}<br>Unfortunately this item can not be delivered.<br>However there are ${body.body.data[i].stock} available for pick-up!<br><hr>`)
        }
        // if (actualItem === true) {
        //   $('.showFurnitureType').append(`<br>${body.body.data[i].name} <br> <img src=${body.body.data[i].imageUrl}> <br> ${body.body.data[i].description} <br> The available colors for this item are: ${body.body.data[i].colors}<br><br><hr>`)
        // }

      }

    }, function(error) {
      $('.showErrors').append(`There was an error processing your request: ${error.message}`);
    });
    return false;
  });
});
