import React, { ReactElement } from 'react'
import logo from './logo.svg'
import './App.css'
import Canvas from './Canvas'

const App: React.FC = (): ReactElement => {
  console.log('APP')
  return (
    <div className="App">
      <header className="App-header">
        <Canvas text={'Hello World'}></Canvas>
      </header>
    </div>
  )
}

export default App
