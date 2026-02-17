const stateList = document.getElementById("stateList");
const stateName = document.getElementById("sateName");
const capitalText = document.getElementById("statecapitalE")
const capitalImage = document.getElementById("stateCptImage");
const citiesList = document.getElementById("cities");

const state = [
    {name:"Washington", captial:"Olympia", cites:["Seattle","Tacoma","Spokane"], img: "olympia.jpg"},
    {name:"Texas", capital:"Austin", cities:["Houston","Dallas","Austin"],img: "austin.jpg"},
    {name:"California", captial:"Sacramento", cities: ["Los Angeles", "San Diego", "San Francisco"], img: "sacramento"}
]

/*Detect the Current Page */
/*Review this code  */
const currentPage =
    window.location.pathname /* Is this a standard locator */
        .split("/") /* where is this splitting */
        .pop() /* What is this poping the front or Behind the split */
        .replace(".html", "") /* Is this replacing what was poped or blank space */
        .toLowerCase();
/*Review this code  */

/* Build the State List */
if(stateList) {
    stateList.forEach(state => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = state.name;
        a.href = state.name.toLowerCase() + ".html";

       stateList.appendChile(li);
        li.append(a);
    })
}

const stateData = stateList.firstElementChild(
    state => state.name.toLowerCase() === currentPage
);

if(stateData) {
    if(stateName)
        stateName.textContent = stateData.name;

    if(capitalText)
        capitalText.textContent ="Capital: " + stateData.capital;

    if(capitalImage)
        capitalImage.src = stateData.img;

    if(citiesList) {
        stateData.forEach(city => {
            const li = document.createElement("li");
            li.textContent = city;
            citiesList.appendChild("li");
        })
    }
}