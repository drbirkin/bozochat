const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.SECRET_BOZO}`,
  },
}

const buttonView = async (response, options) => {
  const $purchaseButton = document.getElementById(options.purchaseButtonId)
  const purchaseButton = document.querySelector('#purchaseButton')
  const newElement = document.createElement('span')
  if (response.data.length === 0) {
    $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
  } else {
      $purchaseButton.innerHTML = `${options.inStockText} $${response.data[0].plan.amount/100}/Month` || 'Purchase'
      $purchaseButton.href = response.data[0].url
    
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
    `https://${portalUrl}/v6/links?active=true`,header
  )
  
  await buttonView(await res.json(), options)
  // smartButtonStyleView()
}
