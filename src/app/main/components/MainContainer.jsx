import React from 'react'
import Display from './Display'
import Controls from './Controls'
import timerActions from '../actions/timerActions'
import DescriptionModal from './DescriptionModal'
import dispatcher from '../../../redux/dispatcher'
import * as Action from '../action'

class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleCancelStart = this.handleCancelStart.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStartRequest = this.handleStartRequest.bind(this)
  }
  handleStart(description) {
    timerActions.startPomodoro(this.props.timer_id, this.props.users, description)
  }
  handleStartRequest(){
    dispatcher.dispatch({type: Action.StartRequested, payload: {}})
  }
  handleCancelStart() {
    dispatcher.dispatch({type: Action.StartCanceled, payload: {}})
  }
  render(){ 
    return (
      <div>
        <DescriptionModal isActive={this.props.need_description} onStart={this.handleStart} onCancel={this.handleCancelStart} />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.props.time} is_shared={this.props.is_shared} />
            <Controls startDisabled={this.props.start_disabled} 
              onStart={this.handleStartRequest} />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
