import { loaderView, removeLoader } from './view/loaderView.js'
import { renderListItems } from './view/dropdownView.js'
import { menuIconView } from './view/mobileView.js'
import { moveCursor } from './view/cursorView.js'
import { metaLabs } from './view/smartButtonView.js'
import { faqView } from './view/faqView.js'
import TextView from './view/introTextView.js'
import Observer from './view/scrollView.js'

const textController = (data) => {
  setInterval(() => {
    TextView.transiteText(data)
  }, 2000)
}

const controller = () => {
  const targetEl = document.querySelectorAll('.section')
  const faqDetails = document.querySelector('.faq-details')
  const upperText = document.querySelector('.intro-text .upper')
  const lowerText = document.querySelector('.intro-text .lower')
  const loginButton = document.querySelector('.main-button')
  // Menu controll
  menuIconView()
  // Intro text
  textController(lowerText)
  textController(upperText)
  // Login
  renderListItems(loginButton)
  // cursor
  requestAnimationFrame(moveCursor)
  // smartbutton purchase links
  metaLabs('dashboard.bozochat.com', {
    purchaseButtonId: 'purchaseButton',
    outOfStockText: 'Out of Stock',
    inStockText: 'Purchase for $40/Month',
  })

  // IntersectionObserverAPI
  targetEl.forEach((e) => Observer.observe(e))
  // faq
  faqDetails.addEventListener('click', (e) => {
    faqView(e)
  })
}

document.querySelector('main').style.display = 'none'
// spinner
window.onload = function () {
  loaderView()
  removeLoader()
  // setTimeout(async () => {
  // }, 3000)
  document.querySelector('main').style.display = 'block'
  controller()
}
