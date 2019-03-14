const isNotNull = variable => {
  if (typeof variable !== 'undefined' && variable !== null) return true
  return false
}

export const get = key => {
  const cache = window.sessionStorage.getItem(key)
  if (isNotNull(cache)) {
    const cacheParsed = JSON.parse(cache)
    if (isNotNull(cacheParsed)) {
      const timeNow = new Date().getTime()
      const dateCache = cacheParsed.created
      const expiryInMilis = parseInt(cacheParsed.expiry, 10) * 60 * 1000
      const expiryTime = parseInt(dateCache, 10) + expiryInMilis
      
      if (expiryTime > timeNow) return cacheParsed.value
      else remove(key)
    }
  }
  return null
}

export const set = (key, value = '', expiryInMinutes = 5) => {
  const data = {
    created: new Date().getTime(),
    value,
    expiry: expiryInMinutes,
  }
  window.sessionStorage.setItem(key, JSON.stringify(data))
  return data
}

export const remove = key => {
  return window.sessionStorage.removeItem(key)
}

export const clear = () => {
  return window.sessionStorage.clear()
}