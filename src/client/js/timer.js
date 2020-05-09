export const countdown = (tripDate) => {

    let countdownDate = new Date(tripDate).getTime();
    let now = new Date().getTime();
    let distance = countdownDate - now;
    let dayRemain = Math.ceil(distance / (1000 * 60 * 60 * 24));

    return dayRemain;
}

export const countTripLength = (tripDateEnd, tripDateStart) => {
    let startTime = new Date(tripDateStart).getTime();
    let endTime = new Date(tripDateEnd).getTime();
    let diff = endTime - startTime + 1;
    let tripLength = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return tripLength;
}