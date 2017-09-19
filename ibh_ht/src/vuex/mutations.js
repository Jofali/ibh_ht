const UPDATA_STARTLOGIN = 'UPDATA_STARTLOGIN'
const UPDATA_CHANGESTATE = 'UPDATA_CHANGESTATE'
const UPDATA_GETSESSIONSIGN = 'UPDATA_GETSESSIONSIGN'
const UPDATA_SORTTABLE = 'UPDATA_SORTTABLE'
const UPDATA_SORTTABLEDATE = 'UPDATA_SORTTABLEDATE'

export default {
  [UPDATA_STARTLOGIN] (state, data) {
    state.sign = data
    sessionStorage.sign = JSON.stringify(state.sign)
  },
  [UPDATA_CHANGESTATE] (state, data) {
    state.sign = {}
    sessionStorage.sign = JSON.stringify(state.sign)
  },
  [UPDATA_GETSESSIONSIGN] (state) {
    if (sessionStorage.sign === undefined) {
      return false
    } else {
      state.sign = JSON.parse(sessionStorage.sign)
    }
  },
  [UPDATA_SORTTABLE] (state, data) {
    state.sortTable = data
    sessionStorage.sortTable = JSON.stringify(state.sortTable)
  },
  [UPDATA_SORTTABLEDATE] (state, data) {
    state.sortTable[data.i].CreateDate = data.arr
  }
}
