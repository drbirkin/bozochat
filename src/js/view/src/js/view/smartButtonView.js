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
    $purchaseButton.href = 'https://dashboard.bozochat.com//waitlist'
  } else {
    $purchaseButton.innerHTML =
      `${options.inStockText} $${response.data[0].plan.amount / 100}/Month` ||
      'Purchase'
    $purchaseButton.href = response.data[0].url
  }
  newElement.classList.add('shine')
  purchaseButton.appendChild(newElement)
}

export const metaLabs = async function MetaLabs(portalUrl, options) {
  const res = await fetch(`https://${portalUrl}/v6/links?active=true`, header)

  await buttonView(await res.json(), options)
}
