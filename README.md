# [Simple Web Storage](https://www.npmjs.com/package/simple-webstorage)
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

// or 
// # const storage = require('simple-webstorage')()

storage.local.set('key', 'value')
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

### 2. All in minified js

```html
<script type="text/javascript" src="https://sutanlab.js.org/simple-webstorage/lib/bundle/simple-webstorage.min.js"></script>
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
| `local`   | set         | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number, default: null)  |
| `local`   | remove      | `key` (type: String)                                                                        |
| `local`   | clear       |  none                                                                                       |
| `cookie`  | get         | `key` (type: String)                                                                        |
| `cookie`  | set         | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number, default: 5)     |
| `cookie`  | remove      | `key` (type: String)                                                                        |
| `cookie`  | clear       |  none                                                                                       |
| `session` | get         | `key` (type: String)                                                                        |
| `session` | set         | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number, default: 5)     |
| `session` | remove      | `key` (type: String)                                                                        |
| `session` | clear       |  none                                                                                       |

---
Feel free to contribute [simple-webstorage](https://github.com/sutanlab/simple-webstorage) 🙂

Copyright © 2019 by Sutan Gading Fadhillah Nasution