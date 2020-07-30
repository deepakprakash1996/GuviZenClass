var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=4da9d70932c86a4635533d98c186205b';

fetch(url_string)
.then(res=>res.json())
.then(data=>console.log(data))