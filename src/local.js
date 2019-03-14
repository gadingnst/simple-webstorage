import Storage from './storage'

export const getData = (key) => {
  try {
    const ls = 'localStorage' in window && window.localStorage ? window.localStorage : null
    return Storage.getData(ls, key)
  } catch (err) {}
}

export const setData = (key, value = '', expiryInMinutes = 5) => {
  try {
    const ls = 'localStorage' in window && window.localStorage ? window.localStorage : null
    return Storage.setData(ls, key, value, expiryInMinutes)
  } catch (err) {}
}
