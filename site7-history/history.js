const historyList = document.getElementById("historyList");
const historyYear = document.getElementById("historyYear");
const historyName = document.getElementById("historyName");
const historyDescription = document.getElementById("historyDescription");
const historyType = document.getElementById("historyType");
const historyOfEvents = document.getElementById("historyOfEvents");

const history = [
    {
        name: "Declaration of Independence",
        year: "1776",
        description: "The thirteen American colonies declared independence from Great Britain, forming the United States of America.",
        type: "Political",
        historyEvents: [
            "Boston Tea Party (1773)",
            "First Continental Congress (1774)",
            "American Revolutionary War (1775–1783)"
        ]
    },
    {
        name: "U.S. Constitution Signed",
        year: "1787",
        description: "Delegates at the Constitutional Convention drafted and signed the United States Constitution in Philadelphia.",
        type: "Political",
        historyEvents: [
            "Constitutional Convention",
            "Federalist Papers",
            "Bill of Rights (1791)"
        ]
    },
    {
        name: "Civil War Begins",
        year: "1861",
        description: "The American Civil War began after several Southern states seceded from the Union.",
        type: "War",
        historyEvents: [
            "Battle of Fort Sumter",
            "Emancipation Proclamation (1863)",
            "Appomattox Court House (1865)"
        ]
    },
    {
        name: "World War II Ends",
        year: "1945",
        description: "World War II ended after the surrender of Germany in May and Japan in September.",
        type: "War",
        historyEvents: [
            "D-Day (1944)",
            "Battle of the Bulge (1944)",
            "Atomic Bombings of Hiroshima and Nagasaki"
        ]
    },
    {
        name: "Civil Rights Act",
        year: "1964",
        description: "Landmark legislation outlawing discrimination based on race, color, religion, sex, or national origin.",
        type: "Civil",
        historyEvents: [
            "Brown v. Board of Education (1954)",
            "March on Washington (1963)",
            "Voting Rights Act (1965)"
        ]
    }
];

if(historyList) {
    history.forEach(event => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = event.name;
        a.href = "history.html?name=" + event.name.toLowerCase().replaceAll(" ", "");

        li.appendChild(a);
        historyList.appendChild(li);
    });
}

const params = new URLSearchParams(window.location.search);
const historyKey = params.get("name");
const historyData =  history.find( event =>
   event.name.toLowerCase().replaceAll(" ", "") === historyKey

);

if(historyData) {
    if(historyName) historyName.textContent = historyData.name
    if(historyYear) historyYear.textContent = historyData.year
    if(historyDescription) historyDescription.textContent = historyData.description
    if(historyType) historyType.textContent = historyData.type

    if(historyOfEvents) { 
        historyOfEvents.innerHTML = ("")

        historyData.historyEvents.forEach(event => {
        const li = document.createElement("li");
        li.textContent = event;

        historyOfEvents.appendChild(li);
    })
}
}