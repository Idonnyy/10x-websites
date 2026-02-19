const gameName = document.getElementById("gameName");
const gameGenre = document.getElementById("gameGenre");
const gameDescription = document.getElementById("gameDescription");
const gameFeatures = document.getElementById("gameFeatures");
const gameList =document.getElementById("gameList");
const games = [
    {
        name: "World of Warcraft",
        genre: "Fantasy MMORPG",
        description: "A massive online world set in Azeroth.",
        features: ["Raids", "PvP", "Guilds"]
    },
    {
        name: "Final Fantasy XIV",
        genre: "Fantasy MMORPG",
        description: "Story-driven MMORPG with rich lore.",
        features: ["Story Campaign", "Trials", "Crafting"]
    },
    {
        name: "Elder Scrolls Online",
        genre: "Action MMORPG",
        description: "Explore Tamriel in a shared world.",
        features: ["Open World", "Dungeons", "PvP"]
    }
];

if(gameList) {
    games.forEach(game => {
        const li = document.CreateElement("li");
        const a = document.CreateElement("a");

        li.textContent = game.name;
        a.href = "game.html?name=" + game.name.toLowerCase;

        li.appendChild(li);
        li.appendchild(a);

    })
}

const param = new URLSearchParams(window.location.search);
const gameKey = param.get("name");
const gameData = games.find(game => {
    game.name.toLowerCase === gameKey
});

if(gameData){
    if (gameName) gameName.textContent = gameData.name;
    if (gameGenre) gameGenre.textContent = gameData.genre;
    if (gameDescription) gameDescription.textContent = gameData.description; //why did we use gameData instead of just game.name

    if(gameFeatures) {
        gameFeatures.innerHTML = ""; //before every list;array
        gameFeatures.forEach(feature => {
            const li = document.CreateElement("li");
            li.textContent = feature;
            gameFeatures.appendChild(li);

        })
    }
}





