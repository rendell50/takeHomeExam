// Information to reach API
const url = 'https://5df9c696e9f79e0014b6b31e.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20';

//Selecting page elements
const inputValue = document.querySelector('#input');
const submit = document.querySelector('#submit');
const row = document.createElement('tr');

//AJAX function
//Code goes here

const getOffer = async() => {
    const endpoint = `${url}`;
    try {
        const response = await fetch(endpoint, {cache: 'no-cache'});
        if (response.ok) {
            const jsonResponse = await response.json();
              renderResponse(jsonResponse['offers']);
            }
        } catch(error) {
        console.log(error);
    }
}



//             const offerList = data['offers'];

//             for(let i = 0; i < offerList.length; i++){

             

//                 const merch = offerList[i].merchants;
//                 for(let k = 0; k < merch.length; k++) {
//                     merchId = merch[k].id;
//                     merchName = merch[k].name;
//                     merchDistance = merch[k].distance;
//                     console.log(merch[k]);
//                 }
              
//                 let row = document.createElement('tr');
                    
//                     const offerId = offerList[i].id;
//                     const offerTitle = offerList[i].title;
//                     const offerDescription = offerList[i].description;
//                     const offerValidTo = offerList[i].valid_to;
            
//                 row.innerHTML = `<div><div class="card"><p>Offer id: ${offerId}</p><p>Offer title: ${offerTitle}</p><p>description: ${offerDescription}</p><p>category: ${offerCategory}</p><p>merchant ID: ${merchId}</p><p>merchant Name: ${merchName}</p><p>merchant Distance: ${merchDistance}</p><p>valid to: ${offerValidTo}</p></div></div>`; 
//                 document.querySelector('#responseField').appendChild(row);

                    
    

// getOffer();


// class Offer {
//     constructor(name, date) {
//         this._name = name;
//         this._date = date;
//     }
// }






// Clear previous results and display results to webpage
// const displayOffers = (event) => {
//     event.preventDefault();
//     while(responseField.firstChild){
//       responseField.removeChild(responseField.firstChild)
//     }
//     getOffer();
//   }
  
//   submit.addEventListener('click', displayOffers);





// const xhr = new XMLHttpRequest();

// const url = 'https://5df9c696e9f79e0014b6b31e.mockapi.io/offers/near_by?lat=1.313492&lon=103.860359&rad=20';

// xhr.responseType = 'json';

// xhr.onreadystatechange = () => {
//     if( xhr.readyState === XMLHttpRequest.DONE) {
//         const offers = xhr.response;
//         showOffers(offers);
//     }
// }

// xhr.open('GET', url);

// xhr.send();



// const header = document.querySelector('header');
// const responseField = document.querySelector('#responseField');

// const showOffers = (jsonObj) => {
//     const offers = JSON.stringify(jsonObj);

//     for (let i=0; i< offers.length; i++ ) {
//         const myOffer = document.createElement('article');
//         const id = document.createElement('p');
//         const title = document.createElement('p');
//         const description = document.createElement('p');
//         const category = document.createElement('p');
//         const merchants = document.createElement('ul');
      

//         id.textContent = offers[i];
//         title.textContent = offers[i];
//         description.textContent = offers[i];
//         category.textContent = offers[i];
//         merchants.textContent = offers[i];

//         myOffer.appendChild(id);
//         myOffer.appendChild(title);

//         responseField.appendChild(id);

//     }
// }