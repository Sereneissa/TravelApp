const geonameDataURL = 'api.geonames.org/searchJSON?location&username=serene.issa&style=full'
const geonameUsername = 'serene.issa'

async function getGeonameData(destination) {
    const geonameData = geonameDataURL + geonameUsername;
    try{
        const response = await fetch(geonameData);
        if (response.ok) {
            const destination = {} 
            const data = await response.json();
           
            destination.latitude = data.geonames[0].lat;
            destination.longitude = data.geonames[0].lng;
           
            console.log(destination);
            return destination;
        }
        
    } catch (error) {
        console.log(error);
    }

}



export {getGeonameData}