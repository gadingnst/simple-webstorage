export const isNotNull = variable => (typeof variable !== 'undefined' && variable !== null)

export const isNotEmpty = variable => (typeof variable !== 'undefined' && variable)

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
        else storage.removeItem(key)
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
  if(get(storage, key)) {
    storage.removeItem(key)
    return true
  }
  return false
}

export const clear = storage => {
  return storage.clear()
}

export const keys = storage => {
  const keys = []
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i)
    if (get(storage, key)) keys.push(key)
  }
  return keys
} 
