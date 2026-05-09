import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user='satyajit' age={18} para='i am a develaper'/>
      <Card user='antarjita' age={17} para='i am a student'/>
    </div>
  )
}

export default App
