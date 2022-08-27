class TextView {
  _data
  _checkValue
  _moveValue = 0

  transiteText(data) {
    if (!data) return new Error('text not defined')
    // this._data = data.cloneNode(true) //Cloning no ref
    this._data = data
    // console.log(this._moveValue, this.getTranslateXY(this._data.children[0]))

    // this._data.children[0].style.transform = `translateY(100%)`
    // console.log(this._data.children[0])
    this._checkValue = this._data.classList.contains('upper')
      ? 33.34
      : 33.34 * -1
    this._moveValue = this.getTranslateXY(this._data.children[0], this._data)
    // console.log(this._moveValue)
    if (this._moveValue === this._checkValue * 2) {
      this._data.children[0].style.transform = `translateY(0%)`
      this._moveValue = 0
    } else {
      this._moveValue += this._checkValue
      this._data.children[0].style.transform = `translateY(${this._moveValue}%)`
    }

    // console.log(this._moveValue)
  }

  getTranslateXY(element, parentElement) {
    const translateStyle = element.style.transform
    // console.log(
    //   translateStyle.slice(
    //     translateStyle.indexOf('('),
    //     translateStyle.indexOf('%')
    //   ),
    //   translateStyle
    // )
    const styleVal =
      translateStyle.slice(
        translateStyle.indexOf('(') + 1,
        translateStyle.indexOf('%')
      ) * 1
    // console.log(styleVal)
    // const style = window.getComputedStyle(element)
    // const matrex = style.getPropertyValue('transform')
    // const matrexArr = matrex.split(', ')
    // return parseInt(matrexArr[5])
    // const matrix = new WebKitCSSMatrix(style.transform)
    // return {
    //   translateX: matrix.m41,
    //   translateY: matrix.m42,
    // }
    return styleVal
  }
}

export default new TextView()
