# Simple Web Storage

[![Build Status](https://travis-ci.org/sutanlab/simple-webstorage.svg?branch=master)](https://travis-ci.org/sutanlab/simple-webstorage) [![npm](https://img.shields.io/npm/v/simple-webstorage.svg)](https://www.npmjs.com/package/simple-webstorage) [![npm](https://img.shields.io/npm/dt/simple-webstorage.svg)](https://www.npmjs.com/package/simple-webstorage) [![npm](https://img.shields.io/bundlephobia/min/simple-webstorage.svg)](https://unpkg.com/simple-webstorage/lib/bundle/simple-webstorage.min.js)

> Lightweight utilities that can make easier to write and read application storage in client browser.

### Support :
- Local Storage
- Cookie Storage
- Session Storage
---

## How using this package

### 1. Use Package with NPM

```bash
$ npm i simple-webstorage --save
```

#### All API import

```js
import SimpleWebStorage from 'simple-webstorage'

const storage = SimpleWebStorage()

storage.local.set('key', 'value') // empty the third parameter to store data permanently (only affected in local)
storage.cookie.set('key', 'value', 5)
storage.session.set('key', 'value', 5)
```

#### Partial API import

```js
// # for local storage
import { get as getLocalStorage, set as setLocalStorage } from 'simple-webstorage/lib/local'

// # for session storage
// import { get, set } from 'simple-webstorage/lib/session'

// # for cookie storage
// import { get, set } from 'simple-webstorage/lib/cookie'

setLocalStorage('key', {
  name: 'you',
  skill: [
    'angry',
    'crying'
  ]
}) 

console.log(getLocalStorage('key')) // { name: 'you', skill: ['angry', 'crying'] }
```

##### or you can import partial API like this :

```js
// # for cookie storage
import CookieStorage from 'simple-webstorage/lib/cookie'

// # for local storage
// import LocalStorage from 'simple-webstorage/lib/local'

// # for session storage
// import SessionStorage from 'simple-webstorage/lib/session'

const cookie = CookieStorage()

cookie.set('remembered', true)
cookie.set('forgotten', true)

console.log(cookie.get('remembered')) // true # get values from key. returns any
console.log(cookie.keys()) // ['remembered', 'forgotten'] # list all keys. returns array
```

### 2. All in minified js

```html
<script type="text/javascript" src="https://unpkg.com/simple-webstorage/lib/bundle/simple-webstorage.min.js"></script>
<script type="text/javascript">
  var storage = SimpleWebStorage();

  storage.local.set('key', 'value');
  storage.cookie.set('key', 'value', 5);
  storage.session.set('key', 'value', 5);
</script>
```

## API Details

| Storage   | Method      | Parameters                                                                                  |
|-----------|-------------|---------------------------------------------------------------------------------------------|
| `local`   | get         | `key` (type: String)                                                                        |
| `local`   | set         | `key` (type: String), `value` (type: any, default: 0), `expiryInMinutes` (type: Number, default: null)  |
| `local`   | remove      | `key` (type: String)                                                                        |
| `local`   | clear       |  none                                                                                       |
| `local`   | keys        |  none                                                                                       |
| `cookie` or `session`  | get         | `key` (type: String)                                                           |
| `cookie` or `session`  | set         | `key` (type: String), `value` (type: any, default: 0), `expiryInMinutes` (type: Number, default: 5)     |
| `cookie` or `session`  | remove      | `key` (type: String)                                                                        |
| `cookie` or `session`  | keys        |  none                                                                                       |
| `cookie` or `session`  | clear       |  none                                                                               |

---
Feel free to contribute [simple-webstorage](https://github.com/sutanlab/simple-webstorage) 🙂

Copyright © 2019 by Sutan Gading Fadhillah Nasution