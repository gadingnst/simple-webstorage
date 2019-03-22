/**
 * @jest-environment jsdom
 */

import CookieStorage, {get, set, keys, remove } from '../lib/cookie'

const cookieStorage = CookieStorage()

describe('Testing Cookie Storage API functionally', () => {
  test('[set] should not to be false', () => {
    expect(cookieStorage.set('person', { name: 'John', age: 21 })).toBeTruthy()
  })
  test('[get] should to be equal', () => {
    expect(cookieStorage.get('person')).toEqual({ name: 'John', age: 21 });
  })
  test('[keys] should to be array', () => {
    expect(cookieStorage.keys()).toEqual(['person']);
  })
  test('[remove] should to be true', () => {
    expect(cookieStorage.remove('person')).toBeTruthy();
  })
})

describe('Testing Cookie Storage partial API functionally', () => {
  test('[set] should not to be false', () => {
    expect(set('person', { name: 'John', age: 21 })).toBeTruthy()
  })
  test('[get] should to be equal', () => {
    expect(get('person')).toEqual({ name: 'John', age: 21 });
  })
  test('[keys] should to be array', () => {
    expect(keys()).toEqual(['person']);
  })
  test('[remove] should to be true', () => {
    expect(remove('person')).toBeTruthy();
  })
})