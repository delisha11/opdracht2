// Alle projectgegevens staan in deze lijst.
// Voor een nieuw project voeg je een extra object toe.

const projecten = [
    {
        href: "https://github.com/delisha11/c-/tree/main/opg1PM",
        categoryClass: "cpp",
        aria: "Bekijk C++ Basisprogrammeren",
        img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Afbeelding bij C++ Basisprogrammeren",
        status: "schoolopdracht",
        name: "C++ Basisprogrammeren",
        tagline: "Mijn eerste programmeeropdracht in C++",
        desc: "Een programmeeropdracht waarin ik de basis van C++ heb geleerd en toegepast. Hierbij heb ik geoefend met het opbouwen van een programma en het schrijven van logica.",
        tags: ["C++", "Programmeren"],
        linktext: "Bekijk project →"
    },
    {
        href: "https://github.com/delisha11/c-/tree/main/opg2",
        categoryClass: "cpp",
        aria: "Bekijk C++ Functies en Logica",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Afbeelding bij C++ Functies en Logica",
        status: "schoolopdracht",
        name: "C++ Functies & Logica",
        tagline: "Verder bouwen op de basis van C++",
        desc: "In deze opdracht heb ik verder geoefend met programmeren in C++. De focus lag op het toepassen van functies en programmeerlogica om een programma overzichtelijk op te bouwen.",
        tags: ["C++", "Functies", "Logica"],
        linktext: "Bekijk project →"
    },
    {
        href: "https://github.com/delisha11/c-/tree/main/opg3",
        categoryClass: "cpp",
        aria: "Bekijk Nonogram",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Afbeelding bij Nonogram",
        status: "schoolopdracht",
        name: "Nonogram",
        tagline: "Een logisch puzzelspel gemaakt in C++",
        desc: "Voor Programmeermethoden heb ik samen met Joelle Tiao een Nonogram-puzzel gemaakt in C++. De speler kan door de puzzel bewegen, vakken aanpassen en verschillende instellingen gebruiken.",
        tags: ["C++", "Classes", "Arrays"],
        linktext: "Bekijk project →"
    },
    {
        href: "https://github.com/delisha11/c-/tree/main/opg4",
        categoryClass: "cpp",
        aria: "Bekijk Gomoku",
        img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Afbeelding bij Gomoku",
        status: "schoolopdracht",
        name: "Gomoku",
        tagline: "Een bordspel waarbij je als eerste vijf stenen op een rij krijgt",
        desc: "Voor Programmeermethoden heb ik samen met Joelle Tiao een Gomoku-spel gemaakt in C++. Het programma ondersteunt speler tegen speler, speler tegen computer en computer tegen computer.",
        tags: ["C++", "Classes", "Pointers", "Arrays"],
        linktext: "Bekijk project →"
    },
    {
        href: "https://github.com/LeakyIO/EcoNectDesktopGUI",
        categoryClass: "java",
        aria: "Bekijk EcoNect Desktop GUI",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Afbeelding bij EcoNect Desktop GUI",
        status: "challenge",
        name: "EcoNect Desktop GUI",
        tagline: "Een Java challenge met een grafische interface",
        desc: "Voor deze challenge heb ik gewerkt aan een desktopapplicatie in Java. Hierbij heb ik gewerkt met objectgeoriënteerd programmeren en een grafische gebruikersinterface.",
        tags: ["Java", "OOP", "GUI"],
        linktext: "Bekijk project →"
    },
    {
        href: "https://github.com/danjazhang/SE2",
        categoryClass: "java",
        aria: "Bekijk Hotel Simulator",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=700&fit=crop&auto=format",
        imgalt: "Afbeelding bij Hotel Simulator",
        status: "schoolproject",
        name: "Hotel Simulator",
        tagline: "Een hotelsimulatie gemaakt met Java",
        desc: "Een Java-project waarin een hotelsimulatie is ontwikkeld. Hierbij is gewerkt met Swing, MVC en verschillende onderdelen voor het simuleren van gebeurtenissen in een hotel.",
        tags: ["Java", "Swing", "MVC", "JUnit"],
        linktext: "Bekijk project →"
    }
];


// Maakt één projectkaart aan op basis van de projectgegevens.
function createProjectCard(project) {
    const link = document.createElement("a");

    link.href = project.href;
    link.className = `project project-${project.categoryClass}`;
    link.setAttribute("aria-label", project.aria);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Afbeelding en pijltje
    const imageContainer = document.createElement("div");
    imageContainer.className = "project-image";

    const image = document.createElement("img");
    image.src = project.img;
    image.alt = project.imgalt;

    const arrow = document.createElement("span");
    arrow.className = "project-arrow";
    arrow.textContent = "→";

    imageContainer.append(image, arrow);

    // Tekst op de projectkaart
    const content = document.createElement("div");
    content.className = "project-content";

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = project.status;

    const title = document.createElement("h2");
    title.textContent = project.name;

    const tagline = document.createElement("p");
    tagline.className = "tagline";
    tagline.textContent = project.tagline;

    const description = document.createElement("p");
    description.textContent = project.desc;

    // Voeg de tags toe aan de projectkaart.
    const tags = document.createElement("div");
    tags.className = "tags";

    project.tags.forEach(tagText => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = tagText;
        tags.appendChild(tag);
    });

    const linkText = document.createElement("span");
    linkText.className = "project-link-text";
    linkText.textContent = project.linktext;

    content.append(status, title, tagline, description, tags, linkText);
    link.append(imageContainer, content);

    return link;
}


// Toont de projecten en past de gekozen filter en sortering toe.
function renderProjects(filter = "all", sort = "default") {
    const grid = document.getElementById("project-grid");
    const count = document.getElementById("project-count");

    // Stop als deze pagina geen projectoverzicht heeft.
    if (!grid) {
        return;
    }

    // Selecteer alle projecten of alleen projecten van één taal.
    let list = projecten.filter(project =>
        filter === "all" || project.categoryClass === filter
    );

    // Sorteer de projecten op naam als dat is gekozen.
    if (sort === "az") {
        list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "za") {
        list.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Verwijder de oude kaarten.
    grid.replaceChildren();

    // Maak voor elk project een nieuwe kaart.
    list.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });

    // Toon hoeveel projecten zichtbaar zijn.
    if (count) {
        count.textContent = `${list.length} project(en) weergegeven`;
    }
}


// Koppelt de filterknoppen en de sorteerkeuze aan de projectlijst.
function setupProjectFilters() {
    const grid = document.getElementById("project-grid");

    // Deze pagina heeft geen projectfilters.
    if (!grid) {
        return;
    }

    const buttons = document.querySelectorAll(
        "#project-controls .filter"
    );

    const sortSelect = document.getElementById("project-sort");

    let activeFilter = "all";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = button.dataset.filter;

            // Verplaats de actieve opmaak naar de gekozen knop.
            buttons.forEach(filterButton => {
                filterButton.classList.remove("active");
            });

            button.classList.add("active");

            renderProjects(activeFilter, sortSelect.value);
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            renderProjects(activeFilter, sortSelect.value);
        });
    }

    // Toon bij het openen van de pagina alle projecten.
    renderProjects();
}


// Toont een foutmelding bij een ongeldig invoerveld.
function showFieldError(input, error, message) {
    error.textContent = message;
    input.setAttribute("aria-invalid", "true");
}


// Verwijdert de foutmelding als een veld geldig is.
function clearFieldError(input, error) {
    error.textContent = "";
    input.setAttribute("aria-invalid", "false");
}


// Controleert de naam.
function validateName() {
    const input = document.getElementById("naam");
    const error = document.getElementById("naam-error");

    if (!input || !error) {
        return false;
    }

    const name = input.value.trim();

    if (name.length < 2) {
        showFieldError(input, error, "Vul minimaal 2 tekens in.");
        return false;
    }

    clearFieldError(input, error);
    return true;
}


// Controleert het e-mailadres.
function validateEmail() {
    const input = document.getElementById("email");
    const error = document.getElementById("email-error");

    if (!input || !error) {
        return false;
    }

    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showFieldError(input, error, "Vul een geldig e-mailadres in.");
        return false;
    }

    clearFieldError(input, error);
    return true;
}


// Controleert het bericht.
function validateMessage() {
    const input = document.getElementById("bericht");
    const error = document.getElementById("bericht-error");

    if (!input || !error) {
        return false;
    }

    const message = input.value.trim();

    if (message.length < 10) {
        showFieldError(input, error, "Vul minimaal 10 tekens in.");
        return false;
    }

    clearFieldError(input, error);
    return true;
}


// Stelt het contactformulier in.
function setupContactForm() {
    const form = document.getElementById("contact-form");

    // Stop als het formulier niet op deze pagina staat.
    if (!form) {
        return;
    }

    const name = document.getElementById("naam");
    const email = document.getElementById("email");
    const message = document.getElementById("bericht");
    const success = document.getElementById("form-success");

    // Controleer een veld wanneer de gebruiker het verlaat.
    name.addEventListener("blur", validateName);
    email.addEventListener("blur", validateEmail);
    message.addEventListener("blur", validateMessage);

    form.addEventListener("submit", event => {
        event.preventDefault();

        const nameIsValid = validateName();
        const emailIsValid = validateEmail();
        const messageIsValid = validateMessage();

        // Toon alleen succes als alle velden geldig zijn.
        if (nameIsValid && emailIsValid && messageIsValid) {
            success.textContent =
                "Bedankt! Alle velden zijn correct ingevuld.";

            form.reset();

            // Zet de velden na het resetten terug naar de beginstatus.
            name.setAttribute("aria-invalid", "false");
            email.setAttribute("aria-invalid", "false");
            message.setAttribute("aria-invalid", "false");

            document.getElementById("naam-error").textContent = "";
            document.getElementById("email-error").textContent = "";
            document.getElementById("bericht-error").textContent = "";
        } else {
            success.textContent = "";
        }
    });
}


// Adres van de externe API met programmeerquotes.
const quoteApiUrl = "https://www.drivebird.com/api/quotes/random";


// Haalt een quote op en toont deze op de pagina.
async function loadProgrammingQuote() {
    const status = document.getElementById("quote-status");
    const content = document.getElementById("quote-content");
    const author = document.getElementById("quote-author");

    // Stop als de quote-sectie niet op deze pagina staat.
    if (!status || !content || !author) {
        return;
    }

    status.textContent = "Quote wordt geladen...";
    content.textContent = "";
    author.textContent = "";

    try {
        // Vraag een quote op bij de externe API.
        const response = await fetch(quoteApiUrl);

        if (!response.ok) {
            throw new Error(`HTTP-fout: ${response.status}`);
        }

        // Zet de JSON-response om naar JavaScript-gegevens.
        const data = await response.json();

        if (!data.data || !data.data[0]) {
            throw new Error("Onvolledige API-response.");
        }

        const quote = data.data[0];

        if (!quote.quote || !quote.author) {
            throw new Error("Quote of auteur ontbreekt.");
        }

        // Toon de quote en de naam van de auteur.
        content.textContent = `“${quote.quote}”`;
        author.textContent = `— ${quote.author}`;
        status.textContent = "Nieuwe quote geladen.";
    } catch (error) {
        // Toon een melding als de API niet bereikbaar is.
        console.error("API-fout:", error);
        status.textContent =
            "De quote kon niet worden geladen. Probeer het opnieuw.";
    }
}


// Koppelt de knop aan het ophalen van een nieuwe quote.
function setupQuoteApi() {
    const button = document.getElementById("new-quote");

    if (!button) {
        return;
    }

    button.addEventListener("click", loadProgrammingQuote);
    loadProgrammingQuote();
}


// Start de functies zodra de HTML is ingelezen.
document.addEventListener("DOMContentLoaded", () => {
    setupProjectFilters();
    setupContactForm();
    setupQuoteApi();
});