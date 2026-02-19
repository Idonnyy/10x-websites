// 1-2: Grab UL element
const stateList = document.getElementById("stateListUL"); // 1
console.log("stateList element:", stateList); // Debug: should show <ul>

// 3-7: States data
const states = [
    { name:"Washington", capital:"Olympia", cities:["Seattle","Tacoma","Spokane"], img:"olympia.jpg" },
    { name:"Texas", capital:"Austin", cities:["Houston","Dallas","Austin"], img:"austin.jpg" },
    { name:"California", capital:"Sacramento", cities:["Los Angeles","San Diego","San Francisco"], img:"sacramento.jpg" }
];

// 8-16: Build the state list
if (stateList) {
    states.forEach(state => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = state.name;
        a.href = "state.html?name=" + state.name.toLowerCase();

        li.appendChild(a);
        stateList.appendChild(li);
    });
} else {
    console.error("stateList UL not found!");
}
