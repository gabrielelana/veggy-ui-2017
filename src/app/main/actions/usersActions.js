import dispatcher from '../../../redux/dispatcher'
import sendCommand from '../../sendCommand'
import ws from '../../../redux/webSocketStream'
import * as Action from '../action'

const userActions = {
  login(username) {
    sendCommand({command: 'Login', username: username}, () => {
      dispatcher.dispatch({type: Action.WaitForLogin})
    })
    ws.sendCommand(`login:${username}`)
  }
}

export default userActions