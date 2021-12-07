const weatherBitURL = 'https://api.weatherbit.io/v2.0/current'
const weatherAPIKey = '29b82de2b01f4bba9f0620befefa4193'

async function getWeatherData(longitude, latitude) {
    const weatherBit = weatherBitURL + weatherAPIKey + `/${latitude}, ${longitude}`;
    try{
        const response = await fetch(weatherBit, { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weatherBit: weatherBit })
      });
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;

        }
    } catch (error) {
        console.log(error);
    }

}

export {getWeatherData}