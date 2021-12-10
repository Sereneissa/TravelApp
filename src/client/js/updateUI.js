const updateUI = async () => {
    try { 
        let response = await fetch( tripPlan + "/addTrip");
        let data = await response.json();

        document.querySelector('#results').innerHTML = "";

        await data.map((tripPlan) => {
            document.querySelector('#results').innerHTML+=`
            <div class = "trip">
                <div class = "photo">
                    <img src= "${trip.image}"/>
                </div>
                
                <div class = "information">
                    City: 
                    <p class = "name">$(trip.name)</p>
                    <br/> 
                    <br/>
                    Start Date: 
                    <p class = "date">$ ={trip.date}</p>
                    <br/> 
                    <br/>
                    Weather Forecast: 
                    <p class="weather">${trip.weather}</p>
                    <br/> 
                    <br/>


                </div>
            </div>
            
            `;
        });

    } catch(error) {
        console.log(error)
    }
}

export {updateUI};
