// GET - get latitude and longtitude info from API
export const getGeoNames = async (geoURL, destination, geoUserName) => {
    const response = await fetch(geoURL + destination + '&maxRows=1&username=' + geoUserName);
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