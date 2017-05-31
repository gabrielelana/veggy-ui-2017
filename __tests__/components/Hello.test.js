import React from 'react'
import renderer from 'react-test-renderer'
import Hello from '../../src/app/Hello'

describe('<Hello />', () => {
  test('should render', () => {
    const component = renderer.create(<Hello />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})