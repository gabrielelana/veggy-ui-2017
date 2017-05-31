import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import Controls from '../../src/app/main/components/Controls'

describe('<Controls />', () => {
  
  test('with default props', () => {
    const component = renderer.create(<Controls />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('with startDisabled', () => {
    const component = renderer.create(<Controls startDisabled />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('When start is clicked onStart callback should be called', (done) => {
    const component = shallow(<Controls onStart={() => { done() }} />)
    component.find('#startButton').simulate('click')
  })
})