const menuIcon = document.querySelector('#mobile-menu')
const mobileMenu = document.querySelector('.navbar ul')
const mobileTabs = document.querySelectorAll('.navbar ul li a')

const removeMenuCover = function () {
  menuIcon.classList.remove('is-active')
  mobileMenu.classList.remove('mobile-active')
}

export const menuIconView = function () {
  menuIcon.addEventListener('click', (e) => {
    menuIcon.classList.toggle('is-active')
    mobileMenu.classList.toggle('mobile-active')
    ;[...mobileTabs].forEach((tab) => {
      tab.addEventListener('click', removeMenuCover)
    })
  })
}
