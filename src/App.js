import React, { Component } from 'react'
import Navbar from './navbar/Navbar'
import Data from './page/data'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Data />
      </div>
    )
  }
}

export default App
