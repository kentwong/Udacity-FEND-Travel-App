const geoURL = 'http://api.geonames.org/searchJSON?q=';
const geoUserName = 'udacity2020';

const weatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherbitKey = '5eb00de214434deb85c2f68e0e881d79';

const pixabayURL = 'https://pixabay.com/api/?key=';
const pixabayKey = '16647286-238bdae0ed933db488b793fd6';

// Formating the date to limit the date input to future date only
let d = new Date();
let today = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + (d.getDate());
document.getElementById('start-date').setAttribute('min', today);
document.getElementById('end-date').setAttribute('min', today);

// Main Function to handle submission
export const handleSubmit = (event) => {
    event.preventDefault();
    Client.clearResult();

    let tripDateStart = document.getElementById('start-date').value;
    let tripDateEnd = document.getElementById('end-date').value;
    let destination = document.getElementById('location-name').value.replace(/\s/g, '+'); //replace spaces with +

    // calculate countdown timer
    let getCountDownTimer = Client.countdown(tripDateStart);

    // calculate trip length
    let tripLength = Client.countTripLength(tripDateEnd, tripDateStart);

    // main code
    if (tripDateStart == '' || tripDateEnd == '' || destination == '') {
        document.getElementById('warning').innerHTML = '<p>Do not leave the form empty!</p>';
    }
    else if (tripDateEnd < tripDateStart) {
        document.getElementById('warning').innerHTML = '<p>End date should not be earlier than start date!</p>';
    }
    else {
        // Get Image
        let imageURL = '';
        Client.getImage(pixabayURL, pixabayKey, destination)
            .then(function (data) {
                imageURL = data.hits[0].webformatURL;
            })

        // Get Weather
        Client.getGeoNames(geoURL, destination, geoUserName)
            .then(function (data) { // Get Weather
                let lat = data.geonames[0].lat;
                let lon = data.geonames[0].lng;
                let cityName = data.geonames[0].name;
                let countryName = data.geonames[0].countryName;
                let noForecast = true;
                let maxTemp, minTemp, desc, icon;

                Client.getWeatherBit(weatherbitURL, lat, lon, weatherbitKey)
                    .then(function (data) {
                        // reiterate forecast data that matches trip date
                        for (let i = 0; i < 16; i++) {
                            if (data.data[i].valid_date === tripDateStart) {
                                maxTemp = data.data[i].max_temp;
                                minTemp = data.data[i].min_temp;
                                desc = data.data[i].weather.description;
                                icon = data.data[i].weather.icon;
                                noForecast = false;
                            }
                        }
                        Client.postData('http://localhost:8081/addData', { city: cityName, country: countryName, date: tripDateStart, endDate: tripDateEnd, tripLength: tripLength, remain: getCountDownTimer, noForecast: noForecast, high: maxTemp, low: minTemp, description: desc, icon: icon, img: imageURL })
                            .then(function () { //ensure all data is POSTed before updating UI
                                Client.updateUI('http://localhost:8081/all');
                            });
                    })
            })
    }
}