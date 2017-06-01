const controls = require('../../src/app/main/reducers/controls')
import * as Action from '../../src/app/main/action'

test('PomodoroStarted should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroStarted})
  expect(state.start_disabled).toBeTruthy()
})

test('PomodoroSquashed should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroSquashed})
  expect(state.start_disabled).toBeFalsy()
})

test('PomodoroCompleted should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroCompleted})
  expect(state.start_disabled).toBeFalsy()
})

