const display = require('../../src/app/main/reducers/display')
import * as Action from '../../src/app/main/action'

describe('Display reducers', () => {
  
  test('PomodoroStarted should return the timer_id and pomodoro_id', () => {
    const actionPayload = { timer_id: '123', pomodoro_id: '456'}
    const state = display({}, {type: Action.PomodoroStarted, payload: actionPayload})
    expect(state.timer_id).toBe('123')
    expect(state.pomodoro_id).toBe('456')
  })

  test('PomodoroCompleted should reset time', () => {
    const state = display({}, {type: Action.PomodoroCompleted, payload: {}})
    expect('25:00').toBe(state.time)
  })

  test('UpdateTimer should update the time', () => {
    const state = display({}, {type: Action.UpdateTimer, payload: {time: 930000}})
    expect('15:30').toBe(state.time)
  })

})