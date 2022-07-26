const loader = document.querySelector('.loader')
const docContent = document.querySelector('body')

export const loaderView = function () {
  // loader.style.display = 'none'
  docContent.style.overflow = 'hidden'
}

export const removeLoader = function () {
  loader.innerHTML = ''
  loader.parentNode.removeChild(loader)
  docContent.style.overflow = 'initial'
}
