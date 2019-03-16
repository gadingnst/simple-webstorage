import SimpleWebStorage from '../lib/index'
import LocalStorage, { get as getLocalStorage } from '../lib/local'
import CookieStorage, { get as getCookieStorage } from '../lib/cookie'
import SessionStorage, { get as getSessionStorage } from '../lib/session'
import { isNotNull, check as checkStorage } from '../lib/storage'

const testThrown = (func, val = '') => {
  try { func(val) } 
  catch (err) {
    return err.message.trim() === 'window is not defined'
  }
}

test('Testing storage function', () => {
  expect(isNotNull(undefined)).toBeFalsy()
  expect(isNotNull(null)).toBeFalsy()
  expect(testThrown(checkStorage, 'localStorage')).toBeTruthy()
})

test('Testing all API import', () => {
  expect(SimpleWebStorage()).toBeDefined()
  expect(LocalStorage()).toBeDefined()
  expect(CookieStorage()).toBeDefined()
  expect(SessionStorage()).toBeDefined()
})

test('Testing partial import', () => {
  expect(getLocalStorage).toBeDefined()
  expect(getCookieStorage).toBeDefined()
  expect(getSessionStorage).toBeDefined()
})