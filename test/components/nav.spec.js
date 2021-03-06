'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { tMock } from '../jestLib/I18n'
import { Nav } from '../../src/ducks/components/Nav'

describe('Nav component', () => {
  it('should be rendered correctly', () => {
    const component = shallow(
      <Nav t={tMock} />
    ).node
    expect(component).toMatchSnapshot()
  })
})
