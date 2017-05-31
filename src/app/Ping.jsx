import React from 'react'
import request from 'superagent'

export default class Ping extends React.Component{
  constructor() {
    super()
    this.handlePingClick = this.handlePingClick.bind(this)
    this.state = {counter: 0}
  }
  componentDidMount() {
    const ws = new WebSocket('ws://localhost:4000/ws')
    ws.onopen = () => { 
      setInterval(() => ws.send('ping'), 5000)
    }
    ws.onmessage = (evt) => {
      const data = JSON.parse(evt.data)
      if (data.event === 'pong') {
        this.setState({ counter: data.counter })
      }
    }
  }
  handlePingClick() {
    request
      .post('http://localhost:4000/commands')
      .set('Content-Type', 'application/json')
      .send({command: 'Ping'})
      .end()
  }
  render() {
    return (
      <div>
        <h3>Ping!</h3>
        <button className="button" onClick={this.handlePingClick}>Ping</button>
        <p>Pongs received: {this.state.counter}</p>
      </div>
    )
  }
}