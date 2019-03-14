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
import { getData, setData } from 'simple-web-storage/local'

// # for session storage
// import { getData, setData } from 'simple-web-storage/session'

// # for cookie storage
// import { getData, setData } from 'simple-web-storage/cookie'

setData('key', 'value')
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
---

Copyright © 2019 by Sutan Gading Fadhillah Nasution