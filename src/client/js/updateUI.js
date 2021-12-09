const updateUI = async () => {
    try { 
        let response = await fetch( tripPlan + "/addTrip");
        let data = await response.json();

        document.querySelector('#results').innerHTML = "";

        await data.map((tripPlan) => {
            document.querySelector('#results').innerHTML+=`
            <div class = "myTrip">
                <div class = "photo">
                    <img src= "${tripPlan.image}"/>
                </div>
                
                <div class = "information">
                    City: 
                    <p class = "name">$(tripPlan.name)</p>
                    <br/> 
                    <br/>
                    Start Date: 
                    <p class = "date">$ ={tripPlan.date}</p>
                    <br/> 
                    <br/>
                    Weather Forecast: 
                    <p class="weather">${tripPlan.weather}</p>
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
