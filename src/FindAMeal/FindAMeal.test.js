import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FindAMeal from './FindAMeal'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <FindAMeal />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})