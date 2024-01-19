import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NonAuthLayout from './layouts/NonAuthLayout'
import LandingPage from './pages/LandingPage'
import SignUpForm from './Components/SignUpForm'
import SignInForm from './Components/SignInForm'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <NonAuthLayout>
              <LandingPage />
            </NonAuthLayout>
          }
        />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/SignInForm" element={<SignInForm />} />
      </Routes>
    </React.Fragment>
  );
}

export default App