// select the elements ans assign to variables
let weatherForm = document.querySelector('.form');
let weatherCity = document.querySelector('.cityInput');
let solihull = document.querySelector('.solihull');


// add eventListener to the form
weatherForm.addEventListener("submit", event => {
        event.preventDefault();

        // get city name
        // let cityName = weatherCity.value;
        // console.log(cityName)
        const url = 'https://api.aerisapi.com/observations/london,uk?&format=json&filter=allstations&limit=1&client_id=585ogEC4h46JkqCAispBp&client_secret=ZNE2lts94FU5sr2iMubHUpWAlwlUsiWZBXVmDBSO';

        fetch(url)
            .then(response => response.json())
            .then(response => {
                const weatherElement = document.querySelector('.results')
                weatherElement.innerHTML = "";
                const pElement = document.createElement("p");

                const weather = response.response.ob.tempC;
                console.log(response)
                const climate = response.response.ob.weather
                const windChill = response.response.ob.windchillC

                pElement.innerHTML = `Temperature is ${weather}°C  and the weather today is ${climate}.
                The wind chill is ${windChill}°C.`
                weatherElement.appendChild(pElement);

            })
    })
    //         {
    //             return response.json();
    //         })
    //         .then(function(json) {
    //             if (!json.success) {
    //                 console.log('Oh no!')
    //             } else {
    //                 const weatherElement = document.querySelector('.results')
    //                 weatherElement.innerHTML = "";
    //                 const pElement = document.createElement("p");

//                 const weather = json.response.ob.tempC;
//                 console.log(json)
//                 const climate = json.response.ob.weather
//                 const windChill = json.response.ob.windchillC

//                 pElement.innerHTML = `Temperature is ${weather}°C  and the weather today is ${climate}.
//                 The wind chill is ${windChill}°C.`
//                 weatherElement.appendChild(pElement);



//             }
//         });
// });
solihull.addEventListener("submit", event => {
    event.preventDefault();
    fetch(`https://api.aerisapi.com/observations/solihull,uk?&format=json&filter=allstations&limit=1&client_id=585ogEC4h46JkqCAispBp&client_secret=ZNE2lts94FU5sr2iMubHUpWAlwlUsiWZBXVmDBSO`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            if (!json.success) {
                console.log('Oh no!')
            } else {

                const solihullElement = document.querySelector(".results1")

                solihullElement.innerHTML = "";
                const pElement = document.createElement("p");

                const weather = json.response.ob.tempC;
                const climate = json.response.ob.weather;
                const windChill = json.response.ob.windchillC

                pElement.innerHTML = `Temperature is ${weather}°C  and the weather today is ${climate}.
                The wind chill is ${windChill}°C.`

                console.log(json)
                console.log(json.response.ob.weather)


                console.log(weather)
                solihullElement.appendChild(pElement);
                console.log(json.response.ob.weatherShort)
            }
        });
})
var city = document.querySelector('.newCity')
let newCity = document.querySelector(".city")

// console.log(cityValue)
city.addEventListener("submit", event => {
    event.preventDefault();
    cityValue = newCity.value
    console.log(cityValue)
    fetch(`https://api.aerisapi.com/observations/${cityValue}?&format=json&filter=allstations&limit=1&client_id=585ogEC4h46JkqCAispBp&client_secret=ZNE2lts94FU5sr2iMubHUpWAlwlUsiWZBXVmDBSO`)

    .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            if (!json.success) {
                console.log('Oh no!')
            } else {
                const cityElement = document.querySelector(".newResults")

                cityElement.innerHTML = "";

                const pElement = document.createElement("p");

                const weather = json.response.ob.tempC;
                const climate = json.response.ob.weather;
                const windChill = json.response.ob.windchillC
                const modalContent = document.querySelector('.modal-content')

                pElement.innerHTML = `Temperature is ${weather}°C  and the weather today is ${climate}.
                The wind chill is ${windChill}°C.`

                console.log(json)
                console.log(json.response.ob.weather)
                    // json.map(({ response }) => {
                    //     const {


                //     }
                // })
                console.log(weather)
                cityElement.appendChild(pElement);
                console.log(json.response.ob.weatherShort)
            }
        })
});

let detailBtn = document.querySelector(".detailsButton")
let modal = document.querySelector(".modal")
console.log(modal)
let closeBtn = document.querySelector(".close-button")
detailBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = "block";
}
closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = "none";
    pElement.innerHTML = "";


}

window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

detailBtn.addEventListener('click', event => {
    event.preventDefault()

    fetch(`https://api.aerisapi.com/observations//observations/within?p=52.4143,-1.7809&radius=50mi&?&format=json&filter=allstations&limit=1&client_id=585ogEC4h46JkqCAispBp&client_secret=ZNE2lts94FU5sr2iMubHUpWAlwlUsiWZBXVmDBSO`)
        .then(function(response) {
            return response.json();
            pElement.value = " ";
        })
        .then(function(json) {
            if (!json.success) {
                console.log('Oh no!')
            } else {

                const solihullElement = document.querySelector(".results1")

                solihullElement.innerHTML = "";
                // const pElement = document.createElement("p");
                const pElement = document.querySelector('#pElement')
                const weather = json.response.ob.tempC;
                const climate = json.response.ob.weather;
                const windChill = json.response.ob.windchillC
                const modalContent = document.querySelector('.modal-content')
                pElement.innerHTML = `Temperature is ${weather}°C  and the weather today is ${climate}.
        The wind chill is ${windChill}°C.`
                modalContent.appendChild(pElement)



            };
        });
});