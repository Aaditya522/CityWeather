const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationName = document.getElementById('locationName');
const Description = document.getElementById('Description');
const climateInfo = document.getElementById('climateInfo');
const temperature = document.getElementById('temperature');

const apiKey = 'cb6538f8a8fc4dflbe492634250201';

async function getWeatherDataFetch(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${location}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Error occured');
        }
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Not found City.');
    }
}

function updateUI(data) {
    climateInfo.textContent=" ";
    locationName.textContent = data.location.name;
    temperature.textContent = `${data.current.temp_c}°C , ${data.current.temp_f}°F`;
    climateInfo.textContent = `${data.current.condition.text}, Day: ${data.current.is_day}`;
    Description.textContent = `Updated: ${data.current.last_updated}`;
}

searchButton.addEventListener('click',function(){
    const location = locationInput.value;
        getWeatherDataFetch(location);
});