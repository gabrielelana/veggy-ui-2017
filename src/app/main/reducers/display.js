import buildReducer from '../../../redux/buildReducer'
import settings from 'settings'
import stringifyTime from '../actions/stringifyTime'
import * as Action from '../action'

export default buildReducer({
  [Action.PomodoroStarted]: (state, action) => ({ timer_id: action.payload.timer_id, pomodoro_id: action.payload.pomodoro_id}),
  [Action.PomodoroCompleted]: () => ({time: stringifyTime(settings.duration)}),
  [Action.PomodoroSquashed]: () => ({time: stringifyTime(settings.duration)}),
  [Action.PomodoroVoided]: () => ({time: stringifyTime(settings.duration)}),
  [Action.UpdateTimer]: (state, action) => ({time: stringifyTime(action.payload.time)}),
})

