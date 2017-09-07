const UPDATA_STARTLOGIN = 'UPDATA_STARTLOGIN'
const UPDATA_RUSHSTATE = 'UPDATA_RUSHSTATE'
const UPDATA_CHANGESTATE = 'UPDATA_CHANGESTATE'

export default {
  [UPDATA_STARTLOGIN] (state, data) {
    state.sign = data
    sessionStorage.sign = JSON.stringify(state.sign)
  },
  [UPDATA_CHANGESTATE] (state, data) {
    state.sign = {}
    sessionStorage.sign = JSON.stringify(state.sign)
  },
  [UPDATA_RUSHSTATE] (state, data) {
    let sessionData = JSON.parse(sessionStorage.sign)
    if (!sessionData.LogInState === undefined) {
      return
    } else {
      state.sign = sessionData
    }
  }
}
