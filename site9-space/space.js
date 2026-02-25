const spaceList = document.getElementById("spaceList");

const space = {
    planets: [
        {
            name: "Earth",
            description: "A life-supporting planet with vast oceans and a protective atmosphere.",
            matter: "Rock and Metal",
            type: "Planet"
        },
        {
            name: "Mars",
            description: "The Red Planet known for its dusty surface and signs of ancient water.",
            matter: "Rock and Iron Oxide",
            type: "Planet"
        }
    ],

    suns: [
        {
            name: "Sun",
            description: "The star at the center of our solar system producing energy through fusion.",
            matter: "Plasma",
            type: "Star"
        },
        {
            name: "Sirius",
            description: "The brightest star visible from Earth in the night sky.",
            matter: "Plasma",
            type: "Star"
        }
    ],

    asteroids: [
        {
            name: "Ceres",
            description: "The largest object in the asteroid belt.",
            matter: "Rock and Ice",
            type: "Asteroid"
        },
        {
            name: "Vesta",
            description: "A large asteroid with a layered internal structure.",
            matter: "Rock and Metal",
            type: "Asteroid"
        }
    ],

    moons: [
        {
            name: "Moon",
            description: "Earth’s natural satellite influencing tides and stability.",
            matter: "Rock",
            type: "Moon"
        },
        {
            name: "Europa",
            description: "A moon of Jupiter believed to have a subsurface ocean.",
            matter: "Ice and Rock",
            type: "Moon"
        }
    ],

    comets: [
        {
            name: "Halley's Comet",
            description: "A periodic comet visible every 76 years.",
            matter: "Ice and Dust",
            type: "Comet"
        },
        {
            name: "Hale-Bopp",
            description: "A bright comet visible for a record 18 months.",
            matter: "Ice and Rock",
            type: "Comet"
        }
    ],

    nebulae: [
        {
            name: "Orion Nebula",
            description: "A massive star-forming cloud of gas and dust.",
            matter: "Gas and Dust",
            type: "Nebula"
        },
        {
            name: "Crab Nebula",
            description: "The remnant of a supernova explosion observed in 1054 AD.",
            matter: "Ionized Gas",
            type: "Nebula"
        }
    ],

    blackHoles: [
        {
            name: "Sagittarius A*",
            description: "The supermassive black hole at the center of the Milky Way.",
            matter: "Collapsed Star Core",
            type: "Black Hole"
        },
        {
            name: "Cygnus X-1",
            description: "One of the first strong black hole candidates discovered.",
            matter: "Collapsed Star Core",
            type: "Black Hole"
        }
    ]
};


const categoriesContainer = document.getElementById("categories");

if (categoriesContainer) {
    Object.keys(space).forEach(category => {
        const div = document.createElement("div");
        div.classList.add("category-card");

        // Capitalize category name
        const name = category.charAt(0).toUpperCase() + category.slice(1);
        div.textContent = name;

        // Add click listener to open category page
        div.addEventListener("click", () => {
            // Store the selected category in localStorage
            localStorage.setItem("selectedCategory", category);

            // Open the category page
            window.location.href = "category.html";
        });

        categoriesContainer.appendChild(div);
    });
}


if (spaceList) {
    Object.entries(space).forEach(([category, items]) => {  // category = "planets", "suns", etc.
        // Optionally, you can add a heading for the category
        const heading = document.createElement("h2");
        heading.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize
        spaceList.appendChild(heading);

        items.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("space-card");

            div.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Type:</strong> ${item.type}</p>
                <p>${item.description}</p>
            `;

            spaceList.appendChild(div);
        });
    });
}

const selectedCategory = localStorage.getItem("selectedCategory");

if (spaceList && selectedCategory && space[selectedCategory]) {

    space[selectedCategory].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("space-card");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Type:</strong> ${item.type}</p>
            <p>${item.description}</p>
            <p><strong>Matter:</strong> ${item.matter}</p>
        `;

        spaceList.appendChild(div);
    });
}