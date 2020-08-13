import React from 'react'
import ReactDOM from 'react-dom' // not part of itself, because of other environments (iOS, Android, XBox)
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
// Component
// State
// Lifecycle
// UI

// Separation of concerns. Component is concerned about UI. JSX.

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Battle />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, // this will be converted to a React element under the hood
  document.getElementById('app') // grap element with Id of app
)