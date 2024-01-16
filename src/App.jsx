import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='' element={<Hero />} />
      </Routes>
    </React.Fragment>
  )
}

export default App