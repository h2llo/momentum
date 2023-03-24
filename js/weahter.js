const API_KEY = 'edcc70b6434519f34adedadd9783fb34';

function geoSuccess(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(URL).then(response => response.json().then(data => {
    const $weather = document.querySelector('#weather span:first-child');
    const $city = document.querySelector('#weather span:last-child');
    $city.innerText = data.name;
    $weather.innerText =  data.weather[0].main
  }));
};
function geoFail(){
  console.log('error');
};
navigator.geolocation.getCurrentPosition(geoSuccess,geoFail);
