$(document).ready(function () {
    let randomQuote;
    let author;
    newQuote();

    function newQuote() {
        let quote_db =
            [{
                "author": "- Elbert Hubbard",
                "quote": "Do not take life too seriously. You will never get out of it alive"
            },
                {"quote": "Age is something that doesn’t matter, unless you are a cheese", "author": "- Luis Bunuel"},
                {"quote": "Life would be tragic if it weren’t funny", "author": "- Stephen Hawking"},
                {"quote": "No one expects the Spanish Inquisition", "author": "- Monthy Python"},
                {"quote": "Never eat more than you can lift", "author": "- Miss Piggy"}];

        randomNum = Math.floor(Math.random() * quote_db.length);
        randomQuote = quote_db[randomNum].quote;
        author = quote_db[randomNum].author;
        $(".quote").text(randomQuote);
        $(".author").text(author);
    }

    $('#tweet').on("click", function () {
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + author);
    });
    $("#getMessage").on("click", function () {
        newQuote();
    });
});