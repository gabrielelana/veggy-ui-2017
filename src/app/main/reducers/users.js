import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.LoggedIn]: (state, action) => {
    return {need_login: false, username: action.payload.username}
  },
  [Action.WaitForLogin]: () => {
    return { waiting_for_login: true }
  },
})