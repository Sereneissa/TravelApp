const weatherBitURL = 'https://api.weatherbit.io/v2.0/current'
const weatherbitKEY = 'process.env.REACT_weatherAPIKey';

async function getWeatherData(longitude, latitude) {
    const weatherBit = weatherBitURL + weatherbitKEY + `/${latitude}, ${longitude}`;
    try{
        const response = await fetch(weatherBit, { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weatherBit: weatherBit })
      });

            const data = await response.json();
            console.log(data);
            return data;

    
    } catch (error) {
        console.log(error);
    }

}

export {getWeatherData}