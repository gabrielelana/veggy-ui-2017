import settings from 'settings'
import stringifyTime from './actions/stringifyTime'

const INITIAL_STATE = { 
  time: stringifyTime(settings.duration),
  timer_id: null,
  pomodoro_id: null
}

export default INITIAL_STATE