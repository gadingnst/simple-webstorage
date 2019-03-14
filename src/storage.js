const isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true
  }
  return false
}

export const getData = (storage, key) => {
  try {
    const ls = storage
    const cache = ls.getItem(key)
    if (isNotNull(cache)) {
      const cacheParsed = JSON.parse(cache)
      if (isNotNull(cacheParsed)) {
        const timeNow = new Date().getTime()
        const dateCache = cacheParsed.created
        const expiryInMilis = parseInt(cacheParsed.expiry, 10) * 60 * 1000
        const expiryTime = parseInt(dateCache, 10) + expiryInMilis
        if (expiryTime > timeNow) {
          return cacheParsed.value
        } else {
          ls.removeItem(key)
        }
      }
    }
  } catch (err) {
    console.log(err)
  }
}

export const setData = (storage, key, value, expiryInMinutes) => {
  try {
    const ls = storage
    const data = {
      created: new Date().getTime(),
      value: value || '',
      expiry: expiryInMinutes || 5,
    }
    ls.setItem(key, JSON.stringify(data))
    return data
  } catch (err) {
    console.log(err)
  }
}
