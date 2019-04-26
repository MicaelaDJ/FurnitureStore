// export default class Lookup {
//   returnSearch(issue, doctor) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&query=${issue}&name=${doctor}&user_key=${process.env.exports.apiKey}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }

export default class Store {
  returnSearch(furnitureType) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
