// Clear Result
export const clearResult = () => {
    document.getElementById('warning').innerHTML = '';
    document.getElementById('trip-location').innerHTML = '';
    document.getElementById('trip-date').innerHTML = '';
    document.getElementById('trip-away').innerHTML = '';
    document.getElementById('icon-forecast').innerHTML = '';
    document.getElementById('temp-forecast').innerHTML = '';
    document.getElementById('desc-forecast').innerHTML = '';
    document.getElementById('pic').innerHTML = '';
}

// function to update UI dynamically
export const updateUI = async (url) => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        document.getElementById('trip-location').innerHTML = `<strong>My trip to ${allData[0].city}, ${allData[0].country} </strong>`;
        document.getElementById('trip-date').innerHTML = `<strong>Trip from</strong> ${allData[0].date} <strong>to</strong> ${allData[0].endDate} <strong>(${allData[0].tripLength} Days)</strong>`;
        document.getElementById('trip-away').innerHTML = `${allData[0].city}, ${allData[0].country} is <strong>${allData[0].remain}</strong> days away!`;

        document.getElementById('pic').innerHTML = `<img id="cityImg" src="${allData[0].img}" alt="${allData[0].city}">`;
    }
    catch (error) {
        console.log('error', error);
    }
}