# Simple Web Storage

[![GitHub](https://img.shields.io/github/license/sutanlab/simple-webstorage.svg)](https://github.com/sutanlab/simple-webstorage) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/a3575d847c764f659810b1bd725679cf)](https://app.codacy.com/app/sutanlab/simple-webstorage?utm_source=github.com&utm_medium=referral&utm_content=sutanlab/simple-webstorage&utm_campaign=Badge_Grade_Dashboard) [![Build Status](https://travis-ci.org/sutanlab/simple-webstorage.svg?branch=master)](https://travis-ci.org/sutanlab/simple-webstorage) [![npm](https://img.shields.io/npm/v/simple-webstorage.svg)](https://www.npmjs.com/package/simple-webstorage) [![npm](https://img.shields.io/npm/dt/simple-webstorage.svg)](https://npm-stat.com/charts.html?package=simple-webstorage) [![npm](https://img.shields.io/bundlephobia/min/simple-webstorage.svg)](https://unpkg.com/simple-webstorage/lib/bundle/simple-webstorage.min.js) [![David](https://img.shields.io/david/dev/sutanlab/simple-webstorage.svg)](https://www.npmjs.com/package/simple-webstorage?activeTab=dependencies) [![GitHub issues](https://img.shields.io/github/issues/sutanlab/simple-webstorage.svg)](https://github.com/sutanlab/simple-webstorage/issues) [![Website](https://img.shields.io/website/https/sutanlab.js.org/simple-webstorage.svg)](https://sutanlab.js.org/simple-webstorage)

> Lightweight utilities that can make easier to write and read application storage in client browser.

### Support :
- Local Storage
- Cookie Storage
- Session Storage

---

## HOW TO USE

### 1. Use Package with NPM or YARN

```bash
# with npm
$ npm i simple-webstorage --save

# or with yarn
$ yarn add simple-webstorage
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
| `local`   | set         | `key` (type: String), `value` (type: any, default: 0), `expiryInMinutes` (type: Number, default: null)  |
| `cookie` or `session`  | set         | `key` (type: String), `value` (type: any, default: 0), `expiryInMinutes` (type: Number, default: 5)     |
| `local` or `cookie` or `session`  | get         | `key` (type: String)                                                           |
| `local` or `cookie` or `session`  | remove      | `key` (type: String)                                                                        |
| `local` or `cookie` or `session`  | keys        |  none                                                                                       |
| `local` or `cookie` or `session`  | clear       |  none                                                                               |

## Support Me
### Global
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/gadingnst)
### Indonesia
- [Trakteer](https://trakteer.id/gadingnst)
- [Karyakarsa](https://karyakarsa.com/gadingnst)

---
Feel free to contribute [simple-webstorage](https://github.com/sutanlab/simple-webstorage) 🙂

Copyright © 2019 by Sutan Gading Fadhillah Nasution
