const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

 async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disable = true;
        quoteEl.innerHTML = "Updating...";
        authorEl.innerHTML = "Updating...";

        const response = await fetch(apiURL);
        const data = await response.json();
    
        const quoteContent = data.content;
        const quoteAuthor = data.author;
    
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~" + quoteAuthor;
        
        btnEl.innerText = "Get a quote";
        btnEl.disable = false;
        
    } catch (error) {
        console.log("An error happened");
        quoteEl.innerText = "An error happened, try agian later";
        authorEl.innerText = "An error happened"; 
        btnEl.innerText = "Get a quote";
        btnEl.disable = false;
    }
    
};

getQuote();

btnEl.addEventListener("click", getQuote);

//continue at 4:17:25
