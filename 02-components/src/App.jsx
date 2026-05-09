import React from 'react'
import card from './components/card'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>satyajit kundu</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, officiis?</p>
      </div>
     {card()}
    </div>
  )
}

export default App
