const quoteContainer = document.querySelector('.container');
let state = {
  loadData: [],
  singleQuoteData: {}
}
const loadingQuotes = async function () {
  try {
    const res = await fetch(`https://jacintodesign.github.io/quotes-api/data/quotes.json`)
    state.loadData = await res.json()
    loadingSingleQuote(state.loadData[145])
  }
  catch (err) {
    console.log(err)
  }
}
loadingQuotes();
function loadingSingleQuote(data) {
  state.singleQuoteData = data
  const markUpHtml = `<div class="quote-container">
   <p class="quote">  ${state.singleQuoteData.text}</p>
 </div>
  <div  class="quote-author-container" >
     <p class="quote-author" > ${state.singleQuoteData.author} </p>
  </div>

 <div class="quote-button-container">
   <button class="quote-btn" > Click Here To Generate </button>
 </div>`
  quoteContainer.innerHTML = "";
  quoteContainer.insertAdjacentHTML('afterbegin', markUpHtml)
  const btn = document.querySelector('.quote-btn');
  btn.addEventListener('click', generateRandomNewQuote)
}
function generateRandomNewQuote() {
  const totalNoOfData = state.loadData.length;
  const randomNumber = Math.trunc(Math.random() * totalNoOfData)
  loadingSingleQuote(state.loadData[randomNumber])
} 
