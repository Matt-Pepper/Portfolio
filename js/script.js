const quotes = {
	"FREDERICK P. BROOKS":
		"What one programmer can do in one month, two programmers can do in two months.",
    "BRIAN W. KERNIGHAN": 
        "90% of the functionality delivered now is better than 100% delivered never.",
    "ADDY OSMANI": 
        "First do it, then do it right, then do it better.",
    "TOM CARGILL":
        "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time."
};
function getRandomQuote(obj) {
    const keys = Object.keys(obj);
    const quote = []
    quote[0] = obj[keys[ keys.length * Math.random() << 0]];
    quote[1] = Object.keys(obj).find(key => obj[key] === quote[0]);
    return quote;
}

const randomQuote = getRandomQuote(quotes)

function fillQuote(quote) {
    const qe = document.getElementById("quotes");
    const qa = document.getElementById("quoteAuthor");

    qe.textContent=quote[0];
    qa.textContent=quote[1];
    return;
}

fillQuote(randomQuote);