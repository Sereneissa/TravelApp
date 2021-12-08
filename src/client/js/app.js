
import {updateUI} from './updateUI'


let tripPlan = async () => {
    console.log('DOM fully loaded');
    const submitbutton = document.querySelector('#button_submit');

    submitbutton.addEventListener('click', async e =>{
        e.preventDefault();


        const city = document.querySelector('#city').value;
        const startdate = document.querySelector('#start_date').value;
        const enddate = document.querySelector('#end_date').value;

        if (city.length ==0) {
            alert("Enter City")
            return;

        }

        if (startdate.length ==0) {
            alert("Enter Start Date")
            return;
        }

        if (enddate.length ==0) {
            alert("Enter End Date")
            return;
        }


    fetch ('http://localhost:8081/addAPI', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({city}) 
  })

  .then(res =>{
      return res.json
  })
})
    
.then (data => {


  if (data.city != null) {
      alert("Invalid City name");
      return;
  }

  try {

     updateUI();

  } catch (error) {
    document.querySelector('#results').innerText = "Please Try Again.";
    console.log(error);
  }

})

}

export {tripPlan}