const geonameDataURL = 'api.geonames.org/searchJSON?location&username=serene.issa&style=full'
const geonameUsername = '&username=serene.issa&style=full'

async function getGeonameData(destination) {
    const geonameData = geonameDataURL + geonameUsername;
    try{
        const response = await fetch(geonameData);
        if (response.ok) {
            const destination = {} 
            const data = await response.json();
           
            location.latitude = data.geonames[0].lat;
            location.longitude = data.geonames[0].lng;
            location.countryCode = data.geonames[0].countryCode;
           
            console.log(destination);
            return destination;

        }
    } catch (error) {
        console.log(error);
    }

}

export {getGeonameData}