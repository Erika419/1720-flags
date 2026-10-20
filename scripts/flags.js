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
getData("https://restcountries.com/v5/all?fields=name,flags,languages");

//Loop through all the countries and display the flags on the page
function dipsplayFlags(countries){
    console.log(countries);
}