var main = require('../../src/app/main/reducers/main')
import * as Action from '../../src/app/main/action'

describe('Main reducer', () => {

  test('StartRequested should set need_description to true', () => {
    const state = main({}, {type: Action.StartRequested, payload: {}})
    expect(state.need_description).toBeTruthy()
  })

  test('StartCanceled should set need_description to true', () => {
    const state = main({need_description: true}, {type: Action.StartCanceled, payload: {}})
    expect(state.need_description).toBeFalsy()
  })

  test('PomodoroStarted should set need_description to true', () => {
    const state = main({need_description: true}, {type: Action.PomodoroStarted, payload: {}})
    expect(state.need_description).toBeFalsy()
  })

})