const quoteContainer = document.getElementById('container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const nextQuoteBtn = document.getElementById('next')
const copyQuoteBtn = document.getElementById('copy')
const iconBtn = document.querySelector('.fa-copy')
const loader = document.getElementById('loader')

const changeQuote = (quote) => {
  console.log(quote)
  if (quote.author) {
    authorText.textContent = `-${quote.author}`
  } else {
    authorText.textContent = `-Unknown`
  }

  quoteText.textContent = quote.content
}

const fetchQuotes = async () => {
  loader.className = 'on'
  quoteContainer.className = 'container-hidden'
  const res = await fetch('https://api.quotable.io/random')
  const apiQuotes = await res.json()
  changeQuote(apiQuotes)
  loader.classList.remove('on')
  quoteContainer.className = 'container'
}
fetchQuotes()

nextQuoteBtn.addEventListener('click', () => {
  fetchQuotes()
})

copyQuoteBtn.addEventListener('click', () => {
  const range = document.createRange()
  range.selectNode(document.getElementById('quote'))
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)
  document.execCommand('copy')
})
