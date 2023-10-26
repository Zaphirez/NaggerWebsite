const quotes = [
    "I love Turtles!",
    "Fucking N***ers!",
    "Fucking Manaproblem!",
    "Mapo",
    "Tumtum",
    "<em>Amazing Grace - Kazoo Cover</em>",
    "Baddadan",
    "Baddadan Baddadan Baddadan",
    "https://open.spotify.com/track/\n2ZWmmrWUgDBcPSLihBMvhg?si=fd723c3e41b14176",
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
    "NIGGERS",
    "You Motherfucker",
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
    "Whenever we wipe ppl should be FUCKING MANAPROBLEM \n and i like that",
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
    "<em>Random German Gibberish nonsense</em>"
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");

const displayedQuotes = [];

generateButton.addEventListener("click", () => {
    let randomIndex;
    let randomQuote;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomIndex].replace(/\n/g, "<br>");
    } while (displayedQuotes.includes(randomQuote));
    if (displayedQuotes.length > Math.floor(quotes.length/2)) {
        displayedQuotes.shift();
    }

    const italicClass = "italic";

    let formattedQuote = randomQuote.replace(/<em>/g, `<span class="${italicClass}">`).replace(/<\/em>/g, `</span>`)


    displayedQuotes.push(randomQuote)
    quoteElement.innerHTML = `"${formattedQuote}"`;
});