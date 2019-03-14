# [Simple Web Storage](https://www.npmjs.com/package/simple-webstorage)
> Lightweight utilities that can make easier to write and read application storage in client browser.

#### Support :
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

SimpleWebStorage.local.set('key', 'value')
SimpleWebStorage.session.set('key', 'value', 5)
SimpleWebStorage.cookie.set('key', 'value', 5)
```

#### Partial import

```js
// # for local storage
import { get as getLocalStorage, set as setLocalStorage } from 'simple-webstorage/lib/local'

// # for session storage
// import { get, set } from 'simple-webstorage/lib/session'

// # for cookie storage
// import { get, set } from 'simple-webstorage/lib/cookie'

setLocalStorage('key', 'value')
```

### 2. All in minified js

```html
<script type="text/javascript" src="https://sutanlab.js.org/simple-webstorage/lib/bundle/simple-webstorage.min.js"></script>

<script type="text/javascript">
  SimpleWebStorage.local.set('key', 'value')
  SimpleWebStorage.session.set('key', 'value', 5)
  SimpleWebStorage.cookie.set('key', 'value', 5)
</script>
```

## API Details

| Storage   | Method Name | Parameter                                                                   | Notes   |
|-----------|-------------|-----------------------------------------------------------------------------|---------|
| `local`   | get         | `key` (type: String)                                                        |         |
| `local`   | set         | `key` (type: String), `value` (type: any)                                   |         |
| `local`   | remove      | `key` (type: String)                                                        |         |
| `cookie`  | get         | `key` (type: String)                                                        |         |
| `cookie`  | set         | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number) |         |
| `cookie`  | remove      | `key` (type: String)                                                        |         |
| `session` | get         | `key` (type: String)                                                        |         |
| `session` | set         | `key` (type: String), `value` (type: any), `expiryInMinutes` (type: Number) |         |
| `session` | remove      | `key` (type: String)                                                        |         |
---

Copyright © 2019 by Sutan Gading Fadhillah Nasution