const quotes = [
    "I love Turtles!",
    "Fucking N***ers!",
    "Fucking Manaproblem!",
    "Mapo",
    "Tumtum",
    "<em>Amazing Grace - Kazoo Cover</em>",
    "Baddadan",
    "Baddadan Baddadan Baddadan",
    "spotify:track:2ZWmmrWUgDBcPSLihBMvhg?si=fd723c3e41b14176",
    "Durum Kebab",
    "Retail is Ass!",
    "FUCK",
    "Yeah only gae ppl are on the forums",
    "British Cunt",
    "walk with the rupa pum pum",
    "BALACLAVA PON FACE, MATIC INNA HAND",
    "sickomode",
    "Im so drunk",
    "Circle K",
    "Mommyproblem",
    "9/11 sus",
    "comgreatulatmions",
    "dalaran Doors",
    "too low dps",
    "fcking nubs",
    "nob",
    "nub",
    "<em>Random Spotify Song Link</em>",
    "N*GGERS",
    "You Motherf*****",
    "assa noob rogue",
    "I\'m not racist",
    "twat",
    "fUK",
    "<em>Posts offensive GIF</em> ",
    "thick milk",
    "hello nob players",
    "u gey",
    "I\'m out of Beers",
    "I\'m not drunk",
    "Whenever we wipe ppl should be FU**ING MANAPROBLEM \n and i like that",
    "gkick",
    "randomly demotes ppl for troll",
    "big doink dps",
    "free serbia from evil bulgarian regime",
    "i like wieners",
    "Water?... Boooooring... atleast take some Cocaine with some LSD on the Side while drinking Beers and Alcohol",
    "chiggn wing",
    "Ok so once i got 20k Dps on this boss",
    "Recount Bugged",
    "Oh no! I'm getting out DPS'd",
    "I am so hungover",
    ":3",
    "teehee",
    "I ruw you\n(Dog Language \"ruw\" = love ig)",
    "I like my Guild",
    "You Guys are awesome",
    "Maraudon is THE Single best Classic Dungeon",
    "<em>Random Danish</em>",
    "<em>Random German Gibberish nonsense</em>",
    "Back when i was on cocaine..."
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");

const displayedQuotes = [];

generateButton.addEventListener("click", () => {
    let randomIndex;
    let randomQuote;

    /* Generates Random Quote */
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomIndex].replace(/\n/g, "<br>");
    } while (displayedQuotes.includes(randomQuote));

    /* Adds Generated Quote to already displayed Quotes */
    displayedQuotes.push(randomQuote)

    /* Makes sure User doesnt run out of quotes */
    if (displayedQuotes.length > Math.floor(quotes.length/2)) {
        displayedQuotes.shift();
    }

    /* Checks for Spotify Tracks */
    if (randomQuote.includes("spotify:track:")) {
        let spotifytrackid = randomQuote.split(":")[2];
        /* Displays Track on Frontend */
        quoteElement.innerHTML = `<p class="Baddadan">Baddadan Link if no Spotify Embed shown please report!</p>\n<p class="warning">VOLUME WARNING TURN DOWN THE VOLUME OF YOUR HEADSET I CANT CONTROLL THIS!!!!</p>\n<iframe src="https://open.spotify.com/embed/track/${spotifytrackid}" width="600" height="160" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    } else {
        /* Formats the Quote */
        let formattedQuote = randomQuote.replace(/<em>/g, `<span class="italic">`).replace(/<\/em>/g, `</span>`)
        /* Displays Quote on Frontend */
        quoteElement.innerHTML = `"${formattedQuote}"`;
    }
});


/* Toggles visibility of the ~Nagger */
function toggle() {
    var x = document.getElementById("toggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}