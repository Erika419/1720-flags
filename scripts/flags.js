const showFlags = document.querySelector("#showflags");

//Build an asyncroncious function to grab the datafrom an external site
async function getData(url){
    try{
        const response = await fetch(url);
        console.log(response);

    } catch (error) {

    }
}

//Call the function above on page load
getData("https://api.restcountries.com/countries/v5?limit=100");

//Loop through all the countries and display the flags on the page
function displayFlags(countries){
    console.log(countries);
}