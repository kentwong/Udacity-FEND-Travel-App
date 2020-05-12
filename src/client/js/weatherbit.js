// GET - get weather forecast info from API
export const getWeatherBit = async (weatherbitURL, lat, lon, weatherbitKey) => {
    const response = await fetch(weatherbitURL + 'lat=' + lat + '&lon=' + lon + '&key=' + weatherbitKey);
    try {
        // Check the status of response. If invalid, alert user without running response.json()
        if (response.status != 200)
            return alert(response.statusText);

        //Transform into JSON
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('error', error);
    }
}