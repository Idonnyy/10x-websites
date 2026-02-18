// ==========================
// 1-5: Grab DOM elements
const stateList = document.getElementById("stateList"); // 1 (UL on stateList.html)
const stateName = document.getElementById("stateName"); // 2 (h1 on state.html)
const capitalText = document.getElementById("stateCapital"); // 3 (h2 on state.html)
const capitalImage = document.getElementById("stateCptImage"); // 4 (img on state.html)
const citiesList = document.getElementById("cities"); // 5 (UL on state.html)

// ==========================
// 7-10: States data
const states = [
    { name:"Washington", capital:"Olympia", cities:["Seattle","Tacoma","Spokane"], img:"olympia.jpg" }, // 7
    { name:"Texas", capital:"Austin", cities:["Houston","Dallas","Austin"], img:"austin.jpg" }, // 8
    { name:"California", capital:"Sacramento", cities:["Los Angeles","San Diego","San Francisco"], img:"sacramento.jpg" } // 9
]; // 10

// ==========================
// 13-22: Build the state list dynamically (for stateList.html)
if (stateList) { // 13: Only run if stateList UL exists
    states.forEach(state => { // 14
        const li = document.createElement("li"); // 15
        const a = document.createElement("a"); // 16
        a.textContent = state.name; // 17
        a.href = "state.html?name=" + state.name.toLowerCase(); // 18: dynamic link
        li.appendChild(a); // 19
        stateList.appendChild(li); // 20
    });
} else {
    console.log("No stateList UL found. Skipping state list creation."); // 21
}

// ==========================
// 24-34: Populate single-state page (state.html) dynamically
const params = new URLSearchParams(window.location.search); // 24: read query string
const stateKey = params.get("name")?.toLowerCase(); // 25: get "name" parameter
const stateData = states.find(state => state.name.toLowerCase() === stateKey); // 26

if (stateData) { // 27: Only if a valid state is found
    if (stateName) stateName.textContent = stateData.name; // 28
    if (capitalText) capitalText.textContent = "Capital: " + stateData.capital; // 29
    if (capitalImage) capitalImage.src = stateData.img; // 30

    if (citiesList) { // 31
        citiesList.innerHTML = ""; // 32: clear previous cities
        stateData.cities.forEach(city => { // 33
            const li = document.createElement('li'); // 34
            li.textContent = city;
            citiesList.appendChild(li); // 35
        });
    }
}




/*Require you to Create a different HTML for each state 

/*Detect the Current Page */
/*Review this code  
const currentPage =
    window.location.pathname  The folder after.com 
        .split("/") /* grabs everything after.com/ and put it in a array 
        .pop() /* pops/returns the last array or "example.html" 
        .replace(".html", "") /*replaces .html with __ so only the name is left.
        .toLowerCase();
Review this code  

const stateData = stateList.firstElementChild(
    state => state.name.toLowerCase() === currentPage
);

*/