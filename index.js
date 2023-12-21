async function chechWeather() {
  let city = document.querySelector("#searchBar").value;

  const apiUrl =
    "http://api.weatherapi.com/v1/current.json?key=1c1cc450f0514651b64112623232012&q=" +
    city +
    "&aqi=no";

  const response = await fetch(apiUrl + "&appid=${apiKey}");
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = data.current.temp_c;
  document.querySelector(".humidity").innerHTML = data.current.humidity;
  document.querySelector(".wind").innerHTML = data.current.wind_kph;
}
