const buttonView = async (response, options) => {
  const $purchaseButton = document.getElementById(options.purchaseButtonId)
  const purchaseButton = document.querySelector('#purchaseButton')
  const newElement = document.createElement('span')
  if (response.status !== 200) {
    $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
  } else {
    const release = await response.json()

    if (release.out_of_stock)
      $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
    else {
      $purchaseButton.innerHTML = options.inStockText || 'Purchase'
      $purchaseButton.href = release.link
    }
  }
  newElement.classList.add('shine')
  purchaseButton.appendChild(newElement)
}
// const smartButtonStyleView = () => {
//   const smartButton = document.querySelector('#purchaseButton')
//   const buttonContent = smartButton.innerText

//   smartButton.classList.remove('purchase')
//   // smartButton.removeAttribute('href')
//   if (buttonContent.startsWith('Purchase'))
//     smartButton.classList.add('purchase')
//   else if (buttonContent.startsWith('OOS'))
//     smartButton.setAttribute('href', 'https://forms.gle/Sr5LqFtBsG3ETwUJ8')
//   else smartButton.setAttribute('href', '404.html')
//   // console.log(smartButton.innerText.startsWith('Purchase'))
// }

export const metaLabs = async function MetaLabs(portalUrl, options) {
  const res = await fetch(
    `https://${portalUrl}/api/release${window.location.search}`
  )
  await buttonView(res, options)
  // smartButtonStyleView()
}
