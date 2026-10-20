const showFlags = document.querySelector("#showflags");

//Build an asyncroncious function to grab the datafrom an external site
async function getData(url){
    try{
        const response = await fetch(url);
        console.log(response);
        displayFlags(await response.json());

    } 
    
    catch (error) {
        
        showFlags.innerText = error.message; 
    }
}

//Call the function above on page load
getData("https://countries.dev/countries?fields=name,capital,flag");

//Loop through all the countries and display the flags on the page
function displayFlags(countries){
    console.log(countries);
    countries.forEach(item =>{
        console.log(item);
        const card = document.createElement("section")
        card.innerHTML= `
        <h2> ${item.name} </h2>
        `
        showFlags.appendChild(card);
    })
}