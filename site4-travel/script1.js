const travelList = document.getElementById("travelList");
const destinationName = document.getElementById("destinationName");
const destinationCountry = document.getElementById("destinationCountry");
const destinationType = document.getElementById("destinationType");
const destinationDescription = document.getElementById("destinationDescription");
const destinationHighlights = document.getElementById("destinationHighlights");


const destinations = [
    {
        name: "Paris",
        country: "France",
        type: "City / Cultural",
        description: "The capital city of France, known for its art, fashion, and the Eiffel Tower.",
        highlights: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"]
    },
    {
        name: "Tokyo",
        country: "Japan",
        type: "City / Modern & Traditional",
        description: "A bustling metropolis blending modern architecture with traditional temples.",
        highlights: ["Shibuya Crossing", "Meiji Shrine", "Tokyo Tower"]
    },
    {
        name: "Grand Canyon",
        country: "USA",
        type: "Natural Wonder",
        description: "A steep-sided canyon carved by the Colorado River, famous for its immense size.",
        highlights: ["South Rim Viewpoint", "Hiking Trails", "River Rafting"]
    }
];

// Build the Travel List dynamically
if (travelList) {
    destinations.forEach(dest => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = "destination.html?name=" + dest.name.toLowerCase();
        a.textContent = dest.name;

        li.appendChild(a);
        travelList.appendChild(li);


    });
}

// Load dynamic destination page
const params = new URLSearchParams(window.location.search);
const destKey = params.get("name")?.toLowerCase();
const destData = destinations.find(dest => dest.name.toLowerCase() === destKey);


if (destData) {
    if (destinationName) { 
        destinationName.textContent = destData.name;
        const span = document.createElement("span"); //find out why this doesn't work do we a different element?
        span.textContent =", " + destData.name;
        span.style.color="black";
        destinationCountry.appendChild(span)};
        
    if (destinationCountry) destinationCountry.textContent = destData.country;
    if (destinationType) destinationType.textContent = destData.type;
    if (destinationDescription) destinationDescription.textContent = destData.description;
    


    if (destinationHighlights) {
        destinationHighlights.innerHTML = "";
        destData.highlights.forEach(spot => {
            const li = document.createElement("li");
            li.textContent = spot;
            destinationHighlights.appendChild(li);
        });
    }
}