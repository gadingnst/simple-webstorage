/**
 * @jest-environment jsdom
 */

import SessionStorage, {get, set, keys, remove } from '../lib/session'

const sessionStorage = SessionStorage()

describe('Testing Session Storage API functionally', () => {
  test('[set] should not to be false', () => {
    expect(sessionStorage.set('person', { name: 'John', age: 21 })).toBeTruthy()
  })
  test('[get] should to be equal', () => {
    expect(sessionStorage.get('person')).toEqual({ name: 'John', age: 21 });
  })
  test('[keys] should to be array', () => {
    expect(sessionStorage.keys()).toEqual(['person']);
  })
  test('[remove] should to be true', () => {
    expect(sessionStorage.remove('person')).toBeTruthy();
  })
})

describe('Testing Session Storage partial API functionally', () => {
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