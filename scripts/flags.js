const showFlags= document.querySelector('#showFlags')

async function getData(url) {
    try{
        const response= await fetch(url)
        displayFlags(await response.json())
    }

    catch(error){
        showFlags.innerText= error.message;
    }
}


//Call the function above on page load
getData("https://countries.dev/countries?fields=name,flags,languages");

//loops through the countries and displays their flags
function displayFlags(countries){
    console.log(countries);
}