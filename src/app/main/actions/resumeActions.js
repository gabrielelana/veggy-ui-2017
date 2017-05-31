import dispatcher from '../../../redux/dispatcher'
import ws from '../../../redux/webSocketStream'
import * as Action from '../action'


const resumeActions = {
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const user = JSON.parse(window.localStorage.getItem('veggy'))
      ws.sendCommand(`login:${user.username}`)
      dispatcher.dispatch({type: Action.Init, payload: user})     
    } else {
      dispatcher.dispatch({type: Action.NeedLogin, payload: {}})
    }
  }
}

export default resumeActions
