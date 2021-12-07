const updateUI = async () => {
    try { 
        let response = await fetch( tripPlan + "/addAPI");
        let data = await response.json();

        document.querySelector('#myResults').innerHTML = "";

        await data.map((myTrip) => {
            document.querySelector('#myResults').innerHTML+=`
            <div class = "myTrip">
                <div class = "photo">
                    <img src= "${myTrip.image}"/>
                </div>
                
                <div class = "information">
                    City: 
                    <p class = "name">$(myTrip.name)</p>
                    <br/> 
                    <br/>
                    Start Date: 
                    <p class = "date">$ ={myTrip.date}</p>
                    <br/> 
                    <br/>
                    Weather Forecast: 
                    <p class="weather">${myTrip.weather}</p>
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
