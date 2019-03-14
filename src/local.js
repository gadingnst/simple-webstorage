export const get = key => {
  const value = window.localStorage.getItem(key)
  return JSON.parse(value)
}

export const set = (key, value = '') => {
  window.localStorage.setItem(key, JSON.stringify(value))
  return { key: value }
}

export const remove = key => {
  return window.localStorage.removeItem(key)
}

export const clear = () => {
  return window.localStorage.clear()
}