
const inputField = document.querySelector('#input');


const renderResponse = (res) => {

  // Creates an empty array to contain the HTML strings
  let offerList = [];

  // Loops through the response 
  for(let i = 0; i < res.length; i++){


    const merch = res[i].merchants;
    for(let k = 0; k < merch.length; k++) {
        merchId = merch[k].id;
        merchName = merch[k].name;
        merchDistance = merch[k].distance;
        console.log(merch[k]);

        if(res[i].category === 1) {
          offerCategory = 'Resturant'; 
    } else if(res[i].category === 2){ 
          offerCategory = 'Retail'; 
    } else if (res[i].category === 4) {
          offerCategory = 'Activity'; 
    } else {
      offerCategory = 'Hotel';
    }

    let offerValidTo = new Date(res[i].valid_to);
    offerValidTo.setDate(offerValidTo.getDate());
      // console.log(offerValidTo);

    let dateQuery = new Date(inputField.value);
    dateQuery.setDate(dateQuery.getDate()+ 5);

    
    if(dateQuery <= offerValidTo && merchDistance < 1.3 ) {
      // console.log(offerList);
      offerList.push(`<div class="card"><td>Offer Id: ${res[i].id}</td><br><td>Offer title: ${res[i].title}</td><br><td>Offer description: ${res[i].description}</td><br><td>Category: ${offerCategory}</td><br><td>Merchant Id: ${merchId}</td><br><td>Merchant Name: ${merchName}</td><br><td>Merchant Distance: ${merchDistance} km</td><br><td>Offer Valid to: ${offerValidTo}</td></div>`);
      
    } 
  }

    
    
  }
  // filtering the results of 2
    offerList = offerList.slice(0,2);


  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in: </p><td>${offerList}</td>`;
  return
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getOffer();
}

submit.addEventListener('click', displaySuggestions);

