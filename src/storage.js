export const isNotNull = variable => (typeof variable !== 'undefined' && variable !== null)

export const check = storage => {
  if (storage in window && window[storage]) return window[storage]
  throw new Error(`Your Browser doesn't support ${storage}`)
}

export const get = (storage, key) => {
  const cache = storage.getItem(key)
  if (isNotNull(cache)) {
    const cacheParsed = JSON.parse(cache)
    if (isNotNull(cacheParsed)) {
      const timeNow = new Date().getTime()
      const dateCache = cacheParsed.created
      const expiryInMilis = parseInt(cacheParsed.expiry, 10) * 60 * 1000
      const expiryTime = parseInt(dateCache, 10) + expiryInMilis
      if (isNotNull(cacheParsed.expiry)) {
        if (expiryTime > timeNow) return cacheParsed.value
        else remove(key)
      } else {
        return cacheParsed.value
      }
    }
  }
  return null
}

export const set = (storage, key, value, expiryInMinutes) => {
  const data = {
    created: new Date().getTime(),
    value,
    expiry: expiryInMinutes,
  }
  storage.setItem(key, JSON.stringify(data))
  return data
}

export const remove = (storage, key) => {
  storage.removeItem(key)
  return true
}

export const clear = storage => {
  storage.clear()
  return true
}

export const keys = storage => {
  const keys = []
  for (let i = 0; i < storage.length; i++) keys.push(storage.key(i))
  return keys
} 
