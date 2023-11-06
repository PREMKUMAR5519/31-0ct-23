document.getElementById("weatherInfo").addEventListener("click", async () => {
    const country = "France";
    const api = "19a8470a463433487b03f8f82158f8e9";
  
    let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  
    let data = await response.json();
  
    const capital = data[0].capital[0];
  
    let weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
    );
  
    let weatherData = await weatherResponse.json();
  
    document.getElementById(
      "details"
    ).innerHTML = `Weather in ${weatherData.name}: ${weatherData.weather[0].main}, Temp: ${weatherData.main.temp}`;
});

document.getElementById("weatherInfo2").addEventListener("click", async () => {
  const country = "nepal";
  const api = "19a8470a463433487b03f8f82158f8e9";

  let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  let data = await response.json();

  const capital = data[0].capital[0];

  let weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
  );

  let weatherData = await weatherResponse.json();

  document.getElementById(
    "details2"
  ).innerHTML = `Weather in ${weatherData.name}: ${weatherData.weather[0].main}, Temp: ${weatherData.main.temp}`;
});

document.getElementById("weatherInfo3").addEventListener("click", async () => {
  const country = "america";
  const api = "19a8470a463433487b03f8f82158f8e9";

  let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  let data = await response.json();

  const capital = data[0].capital[0];

  let weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
  );

  let weatherData = await weatherResponse.json();

  document.getElementById(
    "details3"
  ).innerHTML = `Weather in ${weatherData.name}: ${weatherData.weather[0].main}, Temp: ${weatherData.main.temp}`;
});
