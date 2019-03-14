import Storage from './storage'

export const getData = (key) => {
  if (process.client) {
    try {
      const ls = 'sessionStorage' in window && window.sessionStorage ? window.sessionStorage : null
      return Storage.getData(ls, key)
    } catch (err) {}
  }
}

export const setData = (key, value = '', expiryInMinutes = 5) => {
  if (process.client) {
    try {
      const ls = 'sessionStorage' in window && window.sessionStorage ? window.sessionStorage : null
      return Storage.setData(ls, key, value, expiryInMinutes)
    } catch (err) {}
  }
}
