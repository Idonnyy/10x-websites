console.log("stateList element:", stateList);
// 1-5: Grab DOM elements
const stateList = document.getElementById("stateList"); // 1
const stateName = document.getElementById("stateName"); // 2
const capitalText = document.getElementById("statecapitalE"); // 3
const capitalImage = document.getElementById("stateCptImage"); // 4
const citiesList = document.getElementById("cities"); // 5

// 7-11: States data
const states = [
    { name:"Washington", capital:"Olympia", cities:["Seattle","Tacoma","Spokane"], img:"olympia.jpg" }, // 7
    { name:"Texas", capital:"Austin", cities:["Houston","Dallas","Austin"], img:"austin.jpg" }, // 8
    { name:"California", capital:"Sacramento", cities:["Los Angeles","San Diego","San Francisco"], img:"sacramento.jpg" } // 9
]; // 10

// 13-22: Build the state list dynamically
if (stateList) { // 13
    states.forEach(state => { // 14
        const li = document.createElement("li"); // 15
        const a = document.createElement("a"); // 16
        a.textContent = state.name; // 17
        a.href = "state.html?name=" + state.name.toLowerCase(); // 18
        li.appendChild(a); // 19
        stateList.appendChild(li); // 20
    }); // 21
} // 22

// 24-34: Load a single state page if using URLSearchParams
const params = new URLSearchParams(window.location.search); // 24
const stateKey = params.get("name")?.toLowerCase(); // 25
const stateData = states.find(state => state.name.toLowerCase() === stateKey); // 26

if (stateData) { // 27
    if (stateName) stateName.textContent = stateData.name; // 28
    if (capitalText) capitalText.textContent = "Capital: " + stateData.capital; // 29
    if (capitalImage) capitalImage.src = stateData.img; // 30
    if (citiesList) { // 31
        citiesList.innerHTML = ""; // 32: clear previous cities to prevent duplicates
        stateData.cities.forEach(city => { // 33
            const li = document.createElement("li"); // 34
            li.textContent = city; 
            citiesList.appendChild(li);
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