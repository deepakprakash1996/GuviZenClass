// Creating a variable and assign a new XMLHttpRequest object to it.

var request = new XMLHttpRequest();
var url_string = 'https://dog.ceo/api/breeds/list/all';

// Open a new connection, using the GET request on the URL endpoint
request.open('Get', url_string, true);
request.send();

request.onload = function() {
// Begin accessing JSON data here
var data = JSON.parse(this.response);
console.log(data);
}