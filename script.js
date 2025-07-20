const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const quoteContainer = document.getElementById("qoutes-container");
const authorContainer = document.getElementById("author-container");

const apiURL = "http://api.quotable.io/random";


async function getQuote() {
    try {
        authorContainer.style.display = "none";
        quoteContainer.style.display = "none";
        btnEl.disabled = true;
        btnEl.innerText = "Updating..";

        const result = await fetch(apiURL).then((data) => data.json());

        authorEl.innerHTML = `<em> ~ ${result.author} </em>`;
        quoteEl.innerHTML = result.content;

        authorContainer.style.display = "block";
        quoteContainer.style.display = "block";
        btnEl.disabled = false;

        btnEl.innerText = "Get a quote";
    } catch (error) {
        authorContainer.style.display = "block";
        authorEl.innerText = "An error occurred, please try again later";
    }
}

btnEl.addEventListener("click", getQuote)