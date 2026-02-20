const langList = document.getElementById("langList");
const langName = document.getElementById("langName");
const langYear = document.getElementById("langYear");
const langType = document.getElementById("langType");
const langDescription = document.getElementById("langDescription");
const langUses = document.getElementById("langUses");


const programLang = [
    {
        name: "Java",
        year: 1995,
        type: "Compiled / JVM",
        description: "A class-based, object-oriented language designed for portability and enterprise systems.",
        uses: ["Android Development", "Enterprise Applications", "Backend Systems"]
    },
    {
        name: "JavaScript",
        year: 1995,
        type: "Interpreted / JIT",
        description: "A versatile scripting language primarily used for web development and interactive user interfaces.",
        uses: ["Frontend Web Development", "Backend with Node.js", "Web Applications"]
    },

    {
        name: "Python",
        year: 1991,
        type: "Interpreted / Multi-Paradigm",
        description: "A high-level programming language known for its readability and versatility across many domains.",
        uses: ["Machine Learning", "Artificial Intelligence", "Backend Development"]
    },

    {
        name: "C++",
        year: 1985,
        type: "Compiled / Object-Oriented",
        description: "A powerful, high-performance language widely used in systems programming and game development.",
        uses: ["Game Development", "Operating Systems", "Embedded Systems"]
    },

    {
        name: "Go",
        year: 2009,
        type: "Compiled / Concurrent",
        description: "An open-source programming language designed for simplicity, high performance, and efficient concurrency.",
        uses: ["Cloud Computing", "DevOps", "Microservices"]

        
    }
];

if(langList){
    programLang.forEach(lang => {

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = "language.html?name=" + lang.name.toLowerCase();
        a.textContent = lang.name;


        li.appendChild(a);
        langList.appendChild(li);

    }
    );
};

    const params = new URLSearchParams(window.location.search);
    const langKey = params.get("name")?.toLowerCase();
    const langData = programLang.find(
        lang => lang.name.toLowerCase() === langKey
    );

if(langData) {
    if(langName)
        langName.textContent = langData.name;
    if(langYear) 
        langYear.textContent = langData.year;
    if(langType)
        langType.textContent = langData.type;
    if(langDescription) 
        langDescription.textContent = langData.description;

    if(langUses) {
        langUses.innerHTML = "";
    
        langData.uses.forEach(use => {
        const li = document.createElement("li");
        li.textContent = use;

        langUses.appendChild(li);
    }
        
    )

    }
};