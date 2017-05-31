import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import Controls from '../../src/app/main/Controls'

describe('<Controls />', () => {
  
  test('with default props', () => {
    const component = renderer.create(<Controls />)
    expect(component.toJSON()).toMatchSnapshot()
  })

})