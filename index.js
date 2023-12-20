async function getWeather() {
  const apiKey = "1c1cc450f0514651b64112623232012";
  let search = document.getElementById("searchBar").value;

  await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1c1cc450f0514651b64112623232012&q=search&aqi=no` +
      search,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
      weatherInfo.innerHTML = "<p>Error fetching weather data</p>";
    });
}
