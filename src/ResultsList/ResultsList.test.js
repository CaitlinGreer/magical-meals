import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ResultsList from './ResultsList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ResultsList />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div)
});