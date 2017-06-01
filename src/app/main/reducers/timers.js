import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.TimersLoaded]: (state, action) => { 
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, 
          startedAt: t.started_at,
          description: t.description
        }
      })
    }
  },
  [Action.PomodoroStarted]: (state, action) => {
    return {
      timers: [...state.timers, {
        id: action.payload.pomodoro_id, 
        description: action.payload.description,
        status: 'started', 
        startedAt: new Date(),
      }]
    }
  },
  [Action.PomodoroCompleted]: (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoro_id){
          return Object.assign({}, t, {status: 'completed'})
        }
        return t
      })
    }
  },
  [Action.PomodoroSquashed]: (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoro_id){
          return Object.assign({}, t, {status:'squashed'})
        }
        return t
      })
    }
  },
  [Action.PomodoroVoided]: (state, action) => {
    return {
      timers: state.timers.filter(t => t.id !== action.payload.pomodoro_id)
    }
  }
})

