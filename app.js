async function getKanyeQuote() {
    const results = await axios.get('https://api.kanye.rest');
    const yeQuote = document.querySelector("#quotable");
    const newQuote = document.createElement('BLOCKQUOTE');
    newQuote.innerText = results.data.quote + '.';
    yeQuote.append(newQuote);
}

getKanyeQuote();

