export const faqView = (e) => {
  let target
  if (
    (e.target.tagName === 'DIV' && e.target.className === '') ||
    e.target.tagName === 'P' ||
    e.target.tagName === 'SPAN'
  ) {
    if (e.target.tagName !== 'DIV') target = e.target.parentElement
    else target = e.target

    target.classList.toggle('expandDiv')
    target.children[2].classList.toggle('rotation')
    // console.log(target.children)
    setTimeout(async () => {
      await target.children[1].classList.toggle('deactivate')
    }, 200)
  }
}
