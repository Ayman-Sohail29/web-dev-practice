console.log("Connected!");

let cities = [
  { city: "Lahore", temp: "32°C", condition: "Hot" },
  { city: "Karachi", temp: "30°C", condition: "Humid" },
  { city: "Islamabad", temp: "25°C", condition: "Cloudy" }
];


const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(){
  
  let randomindex = Math.floor(Math.random() * cities.length);
  let selectedcity = cities[randomindex];
  
  let typedCity = document.getElementById("userCity").value;
document.getElementById("cityName").textContent = typedCity;


});