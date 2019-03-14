export const setData = (name, value, expirydays) => {
  let expires = ''
  if (expirydays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirydays * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toGMTString()
  }
  document.cookie = name + '=' + JSON.stringify(value) + expires + '; path=/'
}

export const getData = name => {
  name = name + '='
  const cookie = document.cookie.split(';')
  for(let i = 0; i < cookie.length; i++) {
    let value = cookie[i]
    while (value.charAt(0) == ' ') value = value.substring(1, value.length)
    if (value.indexOf(name) == 0) return JSON.parse(value.substring(name.length, value.length))
  }
  return null
}

export const deleteData = name => {
  setData(name, '', -1)
}