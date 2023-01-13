
// Link a card
let wrapper = document.querySelector('.card-wrapper');
// Fetch data from the api
async function fetchData() {
    const data = await fetch('https://randomuser.me/api?results=100');
    const results = await data.json();
    return results.results;
}
// Read data 
async function readData() {
    let results = await fetchData();
    /*
        forEach( function )
    */
    results.forEach((record)=>{
        wrapper.innerHTML += `
        <div class="card">
            <img src="${record.picture.large}" class="card-img-top" alt="$      {record.name.first}">
            <div class="card-body">
                <h5 class="card-title">${record.name.title} ${record.name.first} ${record.name.last}</h5>
                <p class="card-text">Gender: ${record.gender} and am ${record.dob.age} years old</p>
            </div>
        </div>
        `
    })
}

readData();