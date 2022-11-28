// const url = `https://api.punkapi.com/v2/beers`; 
// const beerPromise = fetch(url); //1 & 2
// console.log(beerPromise); 

// //7
// const jsonPromise = beerPromise.then(
//     function(response){ //4
//         return response.json(); //6
//     }
// );

// console.log(jsonPromise);

// jsonPromise.then(
//     function(data){ //8
//         console.log(data); //9
//     }
// )


//dog api 

// const url = `https://dog.ceo/api/breed/shiba/images/random`;

// fetch(url).then(
//     function(response){
//         console.log(response);
//         return response.json();
//     }
// ).then(
//     function(data){
//         console.log(data.message);
//         const img = document.createElement('img');
//         img.src = data.message;
//         document.body.appendChild(img);
//     }
// )


//chuck api

// const url = `https://api.chucknorris.io/jokes/random?category=food`;

// fetch(url)
// .then( response =>{
//     console.log(response);
//     if(response.status >= 200 && response.status < 300){
//         return response.json()
//     }
//     else
//     {throw 'Datan gick inte att hämta'};

//     return response.json()
// })
// .then(showJoke) 
// .catch( showError);


// function showJoke(jokeData){
//     console.log(jokeData.value);

// }

// function showError(error){
//     console.log(error);
// }

// console.log('Gör det här också');

//dog api get dog breed

const btn = document.querySelector('#breed-btn');

btn.addEventListener('click', getBreed);

function getBreed(event) {
    event.preventDefault();
    const input = document.querySelector('#breed-input');


    const breed = input.value.toLowerCase();
    console.log(breed);
    fetchDogImage(breed);
}

function fetchDogImage(breedPar) {
    const url = `https://dog.ceo/api/breed/${breedPar}/images/random`;

    console.log(url);

    fetch(url)
        .then(Response => Response.json())
        .then(displayDog);
}


function displayDog(dogData) {
    console.log(dogData.message);
    document.querySelector('#dog-container').innerHTML = '';

    const dogImg = document.createElement('img');
    dogImg.src = dogData.message;
    document.querySelector('#dog-container').appendChild(dogImg);

}
