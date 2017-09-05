const UPDATA_LOGIN = 'UPDATA_LOGIN'

export default {
  [UPDATA_LOGIN] (state, data) {
    state.sign = data
  }
}
