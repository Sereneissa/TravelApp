const geonameUsername = 'serene.issa'
import regeneratorRuntime from "regenerator-runtime";

const getGeonameData = async (destination) => {
    const getGeonameRequest  = {
         geonameDataURL: `http://api.geonames.org/searchJSON?formatted=true&q=${destination}`,
    };

    const getGeonameResponse = await fetch ('/locations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    const geonameData = await getGeonameResponse.json();
    return geonameData;

};

export {getGeonameData};