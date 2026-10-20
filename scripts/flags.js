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
getData("https://countries.dev/all?fields=flags,langauges,name");

//Loop through all the countries and display the flags on the page
function displayFlags(countries){
    console.log(countries);
}