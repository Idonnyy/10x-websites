const sportList = document.getElementById("sportList");
const sportName = document.getElementById("sportName");
const sportLeague = document.getElementById("leagueName");
const sportDescription= document.getElementById("sportDescription");
const sportFounded = document.getElementById("foundedYear");


const sports = [
    {
        name: "Football",
        league: "National Football League (NFL)",
        founded: "1920",
        description: "The NFL is the highest level of professional American football in the United States."
    },
    {
        name: "Basketball",
        league: "National Basketball Association (NBA)",
        founded: "1946",
        description: "The NBA is the premier professional basketball league in the world."
    },
    {
        name: "Baseball",
        league: "Major League Baseball (MLB)",
        founded: "1903",
        description: "MLB is the oldest major professional sports league in the United States."
    },
    {
        name: "Hockey",
        league: "National Hockey League (NHL)",
        founded: "1917",
        description: "The NHL is the top professional ice hockey league in North America."
    },
    {
        name: "Soccer",
        league: "Major League Soccer (MLS)",
        founded: "1993",
        description: "MLS is the highest level of professional soccer in the United States."
    }
];

if (sportList) {
    sports.forEach(sport => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = sport.name;
        a.href = "sport.html?name=" + sport.name.toLowerCase();

        li.appendChild(a);
        sportList.appendChild(li);
    });
}


const params = new URLSearchParams(window.location.search);
const sportKey = params.get("name")?.toLowerCase();

const sportData = sports.find(sport => 
    sport.name.toLowerCase() === sportKey
);

if (sportData) {

    if (sportName)
        sportName.textContent = sportData.name;

    if (sportLeague)
        sportLeague.textContent = sportData.league;

    if (sportFounded)
        sportFounded.textContent = sportData.founded;

    if (sportDescription)
        sportDescription.textContent = sportData.description;
}

