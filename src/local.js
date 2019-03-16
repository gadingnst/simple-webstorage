import {
  set as setStorage,
  get as getStorage,
  check as checkStorage,
  remove as removeStorage,
  clear as clearStorage,
} from './storage'

export const get = key => {
  try {
    return getStorage(checkStorage('localStorage'), key)
  } catch(err) {
    console.error(err)
  }
  return null
}

export const set = (key, value = 0, expiryInMinutes = null) => {
  try {
    return setStorage(checkStorage('localStorage'), key, value, expiryInMinutes)
  } catch(err) {
    console.error(err)
  }
  return false
}

export const remove = key => {
  try {
    return removeStorage(checkStorage('localStorage'), key)
  } catch(err) {
    console.error(err)
  }
  return false
}

export const clear = () => {
  try {
    return clearStorage(checkStorage('localStorage'))
  } catch(err) {
    console.error(err)
  }
  return false
}