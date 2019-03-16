import { isNotNull } from './storage'

export const set = (name, value, expiryInMinutes = 5) => {
  let expires = ''
  if (expiryInMinutes) {
    const date = new Date();
    date.setTime(date.getTime() + (expiryInMinutes * 60 * 1000))
    expires = '; expires=' + date.toGMTString()
  }
  document.cookie = name + '=' + JSON.stringify(value) + expires + '; path=/'
  return value
}

export const get = name => {
  name = name + '='
  const cookie = document.cookie.split(';')
  for(let i = 0; i < cookie.length; i++) {
    let value = cookie[i]
    while (value.charAt(0) == ' ') value = value.substring(1, value.length)
    if (value.indexOf(name) == 0) return JSON.parse(value.substring(name.length, value.length))
  }
  return null
}

export const remove = name => {
  if (isNotNull(get(name))) {
    set(name, '', -1)
    return true
  }
  return false
}

export const clear = () => {
  const res = document.cookie;
  const multiple = res.split(";");
  for(let i = 0; i < multiple.length; i++) {
    const key = multiple[i].split("=");
    set(key[0], '', -1)
  }
  return true
}