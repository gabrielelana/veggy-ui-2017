import moment from 'moment'
import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

export default buildReducer({
  [Action.TagsLoaded]: (state, action) => ({ 
    tags: action.payload.map(t => ({tag: t.tag, pomodori: t.pomodori, duration: moment.duration(t.duration).humanize()}))
  }),
  [Action.PomodoroStarted]: (state, action) => {  

    action.payload.tags.forEach(at => {
      const tag = state.tags.find(st => st.tag === at)
      if (tag) {
        tag.pomodori = tag.pomodori + 1
      } else {
        state.tags.push({tag: at, pomodori: 1})
      }
    })

    return {
      tags: state.tags
    }
  },
  
})