import request from 'superagent'
import settings from 'settings'
import Action from './main/action'
import dispatcher from '../redux/dispatcher'

export default function sendCommand(payload, cb) {
  request
    .post(`${settings.host}/commands`)
    .set('Content-Type', 'application/json')
    .send(payload)
    .end((err, res) => {
      if (err){
        dispatcher.dispatch({type: Action.ApiError, payload: err})
      } 
      if (typeof(cb) === 'function'){
        cb(err, res)
      }
    })
}