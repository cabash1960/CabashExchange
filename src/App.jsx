import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NonAuthLayout from './layouts/NonAuthLayout'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={
          <NonAuthLayout>
            <LandingPage />
          </NonAuthLayout>
        } />
      </Routes>
    </React.Fragment>
  )
}

export default App