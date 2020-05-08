import { handleSubmit } from './js/app'
import { countdown } from './js/timer'
import { countTripLength } from './js/timer'
import { getGeoNames } from './js/geonames'
import { getWeatherBit } from './js/weatherbit'
import { getImage } from './js/pixabay'
import { postData } from './js/postdata'
import { clearResult } from './js/display'
import { updateUI } from './js/display'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

document.getElementById('submit').addEventListener('click', handleSubmit);

export {
    handleSubmit,
    countdown,
    countTripLength,
    getGeoNames,
    getWeatherBit,
    getImage,
    postData,
    clearResult,
    updateUI
}

