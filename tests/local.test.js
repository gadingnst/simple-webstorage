/**
 * @jest-environment jsdom
 */

import LocalStorage, {get, set, keys, remove } from '../lib/local'

const localStorage = LocalStorage()

describe('Testing Local Storage API functionally', () => {
  test('[set] should not to be false', () => {
    expect(localStorage.set('person', { name: 'John', age: 21 })).toBeTruthy()
  })
  test('[get] should to be equal', () => {
    expect(localStorage.get('person')).toEqual({ name: 'John', age: 21 });
  })
  test('[keys] should to be array', () => {
    expect(localStorage.keys()).toEqual(['person']);
  })
  test('[remove] should to be true', () => {
    expect(localStorage.remove('person')).toBeTruthy();
  })
})

describe('Testing Local Storage partial API functionally', () => {
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