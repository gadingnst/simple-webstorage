import {
  set as setStorage,
  get as getStorage,
  check as checkStorage,
  remove as removeStorage,
  clear as clearStorage
} from './storage'

export const get = key => {
  try {
    return getStorage(checkStorage('sessionStorage'), key)
  } catch(err) {
    console.error(err.message)
  }
  return null
}

export const set = (key, value = 0, expiryInMinutes = 5) => {
  try {
    return setStorage(checkStorage('sessionStorage'), key, value, expiryInMinutes)
  } catch(err) {
    console.error(err.message)
  }
  return false
}

export const remove = key => {
  try {
    return removeStorage(checkStorage('sessionStorage'), key)
  } catch(err) {
    console.error(err.message)
  }
  return false
}

export const clear = () => {
  try {
    return clearStorage(checkStorage('sessionStorage'))
  } catch(err) {
    console.error(err.message)
  }
  return false
}

export default () => ({ get, set, remove, clear })