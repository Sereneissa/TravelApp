const pixabyURL = 'https://pixabay.com/api/?key=${pixabyAPI}&q=${image}';
const pixabyAPI = '24691018-39a9bd1f1f4754219a0859773'
import regeneratorRuntime from "regenerator-runtime";


async function getPixabyImage(image) {
    const getPixaby = pixabyURL;
    try{
        const response = await fetch(getPixaby) 
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log(error);
    }

}

export {getPixabyImage}