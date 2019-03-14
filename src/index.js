import { 
  getData as getDataLocal, 
  setData as setDataLocal,
  removeData as removeDataLocal,
  clearData as clearDataLocal
} from './local'

import {
  getData as getDataSession, 
  setData as setDataSession,
  removeData as removeDataSession,
  clearData as clearDataSession
} from './session'

import { 
  getData as getDataCookie,
  setData as setDataCookie,
  deleteData as deleteDataCookie 
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
    delete: deleteDataCookie
  }
}

export default SimpleWebStorage