import sendCommand from '../../sendCommand'
import settings from 'settings'

const timerActions = {
  startPomodoro(timer_id, users, description) {
    var cmd = { command: 'StartPomodoro', duration: settings.duration, timer_id: timer_id, description: description }
    sendCommand(cmd)
  },
  squash(timer_id, pomodoro_id) {
    var cmd = { command: 'SquashPomodoro', timer_id: timer_id, pomodoro_id: pomodoro_id }
    sendCommand(cmd)
  }
}

export default timerActions