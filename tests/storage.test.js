/**
 * @jest-environment jsdom
 */

import SimpleWebStorage from '../lib/index'
import { isNotNull, isNotEmpty } from '../lib/storage'

const storage = SimpleWebStorage()

describe('Testing Base API', () => {
  test('Testing all API import', () => {
    expect(storage).toBeTruthy()
  })
  test('Test [isNotNull] functionally', () => {
    expect(isNotNull(undefined)).toBeFalsy()
    expect(isNotNull(null)).toBeFalsy()
  })
  test('Test [isNotEmpty] functionally', () => {
    expect(isNotEmpty(undefined)).toBeFalsy()
    expect(isNotEmpty(null)).toBeFalsy()
    expect(isNotEmpty(false)).toBeFalsy()
    expect(isNotEmpty(0)).toBeFalsy()
  })
})

describe('Testing Local Storage API functionally', () => {
  test('[set] should not to be false', () => {
    expect(storage.local.set('person', { name: 'John', age: 21 })).toBeTruthy()
  })
  test('[get] should to be equal', () => {
    expect(storage.local.get('person')).toEqual({ name: 'John', age: 21 });
  })
  test('[keys] should to be array', () => {
    expect(storage.local.keys()).toEqual(['person']);
  })
  test('[remove] should to be true', () => {
    expect(storage.local.remove('person')).toBeTruthy();
  })
})

describe('Testing Session Storage API functionally', () => {
  test('[set] should not to be false', () => {
    expect(storage.session.set('message', 'Hello')).toBeTruthy()
  })
  test('[get] should to be equal', () => {
    expect(storage.session.get('message')).toEqual('Hello');
  })
  test('[keys] should to be array', () => {
    expect(storage.session.keys()).toEqual(['message']);
  })
  test('[remove] should to be true', () => {
    expect(storage.session.remove('message')).toBeTruthy();
  })
})

describe('Testing Cookie Storage API functionally', () => {
  test('[set] should not to be false', () => {
    expect(storage.cookie.set('logged', true)).toBeTruthy()
  })
  test('[get] should to be false', () => {
    expect(storage.cookie.get('logged')).toBeTruthy();
  })
  test('[keys] should to be array', () => {
    expect(storage.cookie.keys()).toEqual(['logged']);
  })
  test('[remove] should to be true', () => {
    expect(storage.cookie.remove('logged')).toBeTruthy();
  })
})