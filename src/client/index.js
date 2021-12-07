import { startTimer, getTotalTime } from './js/countDown'
import {getGeonameData} from './js/geonameData'
import {getWeatherData} from './js/weatherbit'
import {getPixabyImage} from './js/pixaby'
import {tripPlan} from './js/app'
import {updateUI} from './js/updateUI'
 
console.log(getGeonameData);
console.log(getWeatherData);
console.log(getPixabyImage);


alert("I EXIST")
console.log("CHANGE!!");

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


export {getGeonameData,
    startTimer, 
    getTotalTime,
    getWeatherData,
    getPixabyImage,
    tripPlan,
    updateUI
   }
