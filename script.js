const quotes = [
    "I love Turtles!",
    "Fucking N***ers!",
    "Fucking Manaproblem!",
    "Mapo",
    "Tumtum",
    "Amazing Grace - Kazoo Cover",
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
    "\"Random Spotify Song Link\"",
    "NIGGERS",
    "You Motherfucker",
    "assa noob rogue",
    "I\'m not racist",
    "twat",
    "fUK",
    "\"Posts offensive GIF\"",
    "thick milk",
    "hello nob players",
    "u gey",
    "I\'m out of Beers",
    "I\'m not drunk",
    "Whenever we wipe ppl should be FUCKING MANAPROBLEM \n and i like that.",
    "gkick",
    "\"randomly demotes ppl for troll\"",
    "big doink dps",
    "free serbia from evil bulgarian regime",
    "i like wieners"
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = `"${quotes[randomIndex]}"`;
})