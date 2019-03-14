import { 
  get as getDataLocal, 
  set as setDataLocal,
  remove as removeDataLocal,
  clear as clearDataLocal
} from './local'

import {
  get as getDataSession, 
  set as setDataSession,
  remove as removeDataSession,
  clear as clearDataSession
} from './session'

import { 
  get as getDataCookie,
  set as setDataCookie,
  remove as removeDataCookie 
} from './cookie'

global.SimpleWebStorage = {
  local: {
    get: getDataLocal,
    set: setDataLocal,
    remove: removeDataLocal,
    clear: clearDataLocal
  },
  session: {
    get: getDataSession,
    set: setDataSession,
    remove: removeDataSession,
    clear: clearDataSession
  },
  cookie: {
    get: getDataCookie,
    set: setDataCookie,
    remove: removeDataCookie
  }
}

export default SimpleWebStorage