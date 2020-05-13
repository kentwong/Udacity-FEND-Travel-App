// GET - get imageURL info from API
export const getImage = async (pixabayURL, pixabayKey, destination) => {
    const response = await fetch(pixabayURL + pixabayKey + '&q=' + destination + '&image_type=photo&per_page=3&orientation=horizontal');
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