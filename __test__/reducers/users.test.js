import R from 'ramda'
import users from '../../src/app/main/reducers/users'
import * as Action from '../../src/app/main/action'

describe('Users reducer', () => {

  it('LoggedIn should set need_login to false and return the username', () => {
    const state = users({need_login: true, username: ''}, {type: Action.LoggedIn, payload: {username: 'test-user'}})
    expect(state.need_login).toBeFalsy()
    expect(state.username).toBe('test-user')
  })

  it('WaitForLogin should set waiting_for_login to true', () => {
    const state = users({}, {type: Action.WaitForLogin})
    expect(state.waiting_for_login).toBeTruthy()
  })

})