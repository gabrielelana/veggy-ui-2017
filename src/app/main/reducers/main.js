import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.StartRequested]: () => ({ need_description: true}),
  [Action.StartCanceled]: () => ({ need_description: false }),
  [Action.PomodoroStarted]: () => ({ need_description: false }),
})

