import React from 'react'
import MessageBar from '../../MessageBar'
import Display from './Display'
import Controls from './Controls'
import timerActions from '../actions/timerActions'
import NavBar from '../../NavBar'
import DescriptionModal from './DescriptionModal'
import dispatcher from '../../../redux/dispatcher'
import * as Action from '../action'

class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleCancelStart = this.handleCancelStart.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStartRequest = this.handleStartRequest.bind(this)
    this.handleSquash = this.handleSquash.bind(this)
  }
  handleStart(description) {
    timerActions.startPomodoro(this.props.timer_id, this.props.users, description)
  }
  handleStartRequest(){
    dispatcher.dispatch({type: Action.StartRequested, payload: {}})
  }
  handleSquash() {
    timerActions.squash(this.props.timer_id, this.props.pomodoro_id, this.props.is_shared)
  }
  handleCancelStart() {
    dispatcher.dispatch({type: Action.StartCanceled, payload: {}})
  }
  render(){ 
    return (
      <div>
        <DescriptionModal isActive={this.props.need_description} onStart={this.handleStart} onCancel={this.handleCancelStart} />
        <NavBar username={this.props.username} />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.props.time} is_shared={this.props.is_shared} />
            <Controls 
              startDisabled={this.props.start_disabled} 
              squashDisabled={this.props.squash_disabled} 
              onStart={this.handleStartRequest} 
              onSquash={this.handleSquash} />
          </div>
          <div className="columns">
            <MessageBar message={this.props.message} type={this.props.message_type} />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
