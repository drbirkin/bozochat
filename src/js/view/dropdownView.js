const dropItems = document.querySelector('.dropdown-items')
const arrow = document.querySelector('.dropdown-arrow')
export const renderListItems = (mainButton) => {
  mainButton.addEventListener('click', () => {
    dropItems.classList.toggle('is-active')
    arrow.classList.toggle('rotation')
  })
}
