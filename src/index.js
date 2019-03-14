import { getData as getDataLocal, setData as setDataLocal } from './local'
import { getData as getDataSession, setData as setDataSession } from './session'
import { getData as getDataCookie, setData as setDataCookie, deleteData as deleteDataCookie } from './cookie'

const Storage = {
  local: {
    get: getDataLocal,
    set: setDataLocal,
  },
  session: {
    get: getDataSession,
    set: setDataSession,
  },
  cookie: {
    get: getDataCookie,
    set: setDataCookie,
    delete: deleteDataCookie
  }
}

export default Storage