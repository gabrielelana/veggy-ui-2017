import React from 'react'
import renderer from 'react-test-renderer'
import Ping from '../../src/app/Ping'

describe('<Ping />', () => {
  test('should render', () => {
    window.WebSocket = function(){}
    const component = renderer.create(<Ping />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})