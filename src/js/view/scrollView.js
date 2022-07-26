const options = {
  // root: document.querySelector('body'),
  rootMargin: '0px',
  // threshold: 0.5,
  threshold: [0.5, 1],
}

const switchClasses = (entry, targetCollection, classOne, classTwo) => {
  Array.from(targetCollection).forEach((target, index) => {
    if (index % 2 === 0) target.classList.toggle(classOne, entry.isIntersecting)
    else target.classList.toggle(classTwo, entry.isIntersecting)
  })
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.target.classList.contains('about-services')) {
      // console.log('check: ', entry)
      switchClasses(
        entry,
        entry.target.children[2].children,
        'servicesDown',
        'servicesUp'
      )
      const images = document.querySelectorAll('.about-services .element')
      switchClasses(entry, images, 'imageDown', 'imageUp')
      //   Array.from(images).forEach((target, index) => {
      //     if (index % 2 === 0)
      //       target.classList.toggle('imageDown', entry.isIntersecting)
      //     else target.classList.toggle('imageUp', entry.isIntersecting)
      //   })
    } else if (entry.target.classList.contains('partners-section')) {
      // console.log(entry.target.children[1])
      Array.from(entry.target.children[1].children).forEach((target, index) => {
        target.classList.toggle('details', entry.isIntersecting)
      })
    } else if (entry.target.classList.contains('intro-section')) {
      const images = document.querySelectorAll('.intro-section .element')
      switchClasses(entry, images, 'imageDown', 'imageUp')
    }
  })
}

export default new IntersectionObserver(callback, options)
