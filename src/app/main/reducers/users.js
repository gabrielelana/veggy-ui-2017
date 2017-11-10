import buildReducer from '../../../redux/buildReducer'
import {reject, map, compose} from 'ramda'
import * as Action from '../action'

export default buildReducer({
  [Action.UsersLoaded]: (state, action) => { 
    const filterFn = reject(u => u.user_id === state.user_id)
    const mapperFn = map(u => ({user_id: u.user_id, username: u.username, timer_id: u.timer_id}))
    return { users: compose(filterFn, mapperFn)(action.payload) }
  },
  [Action.SelectedUsersChanged]: (state, action) => {
    return {
      users: state.users.map(u => {
        if (u.user_id === action.payload){
          return Object.assign({}, u, {selected: !u.selected}) 
        } 
        return u
      })
    }
  },
  [Action.LoggedIn]: (state, action) => {
    return {need_login: false, username: action.payload.username}
  },
  [Action.WaitForLogin]: () => {
    return { waiting_for_login: true }
  },
})