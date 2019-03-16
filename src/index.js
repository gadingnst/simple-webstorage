import LocalStorage from './local'
import CookieStorage from './cookie'
import SessionStorage from './session'

global.SimpleWebStorage = () => ({
  local: {
    get: LocalStorage().get,
    set: LocalStorage().set,
    remove: LocalStorage().remove,
    clear: LocalStorage().clear
  },
  cookie: {
    get: CookieStorage().get,
    set: CookieStorage().set,
    remove: CookieStorage().remove,
    clear: CookieStorage().clear
  },
  session: {
    get: SessionStorage().get,
    set: SessionStorage().set,
    remove: SessionStorage().remove,
    clear: SessionStorage().clear
  }
})

export default SimpleWebStorage