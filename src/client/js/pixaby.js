const pixabyURL = 'https://pixabay.com/api/?key=${pixabyAPI}&q=${image}';
const pixabyKEY = 'process.env.REACT_pixabyAPI';

async function getPixabyImage(key, image) {
    const getPixaby = pixabyURL + pixabyKEY;
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