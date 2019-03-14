export const getData = key => {
  const value = window.localStorage.getItem(key)
  return JSON.parse(value)
}

export const setData = (key, value = '') => {
  window.localStorage.setItem(key, JSON.stringify(value))
  return { key: value }
}

export const removeData = key => {
  return window.localStorage.removeItem(key)
}

export const clearData = () => {
  return window.localStorage.clear()
}