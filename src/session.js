const isNotNull = variable => {
  if (typeof variable !== 'undefined' && variable !== null) return true
  return false
}

export const getData = key => {
  const cache = window.sessionStorage.getItem(key)
  if (isNotNull(cache)) {
    const cacheParsed = JSON.parse(cache)
    if (isNotNull(cacheParsed)) {
      const timeNow = new Date().getTime()
      const dateCache = cacheParsed.created
      const expiryInMilis = parseInt(cacheParsed.expiry, 10) * 60 * 1000
      const expiryTime = parseInt(dateCache, 10) + expiryInMilis
      
      if (expiryTime > timeNow) return cacheParsed.value
      else removeData(key)
    }
  }
  return null
}

export const setData = (key, value = '', expiryInMinutes = 5) => {
  const data = {
    created: new Date().getTime(),
    value,
    expiry: expiryInMinutes,
  }
  window.sessionStorage.setItem(key, JSON.stringify(data))
  return data
}

export const removeData = key => {
  return window.sessionStorage.removeItem(key)
}

export const clearData = () => {
  return window.sessionStorage.clear()
}