const move = () => {
  var elems = document.getElementsByClassName('bar')
  var width = 50
  var id = setInterval(() => frame(), 25)

  const frame = () => {
    if (width >= 100) {
      clearInterval(id)
    } else {
      width++

      for (let i = 0; i < elems.length; i++) {
        elems[i].style.width = width + "%"
        elems[i].innerText = width + "%"
      }
    }
  }
}
