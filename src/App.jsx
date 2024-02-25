import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NonAuthLayout from './layouts/NonAuthLayout'
import LandingPage from './pages/LandingPage'
import SignUpForm from './Components/SignUpForm'
import SignInForm from './Components/SignInForm'
import DashboardLayout from './layouts/DasboardLayout'
import User from './Components/User'
import Settings from './Components/Settings'
import Dashboard from './Components/Dashboard'
import Transaction from './Components/Transaction'
import TransactionHistory from './Components/TransactionHistory'

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

        <Route path="/Dashboard" element={
          <DashboardLayout>
            <Dashboard/>
          </DashboardLayout>
        }
        />
        <Route path="/Transaction" element={
          <DashboardLayout>
            <Transaction/>
          </DashboardLayout>
        }
        />
            <Route path="/User" element={
              <DashboardLayout>
                <User/>
              </DashboardLayout>
            }
            />
        <Route path="/TransactionHistory" element={
          <DashboardLayout>
            <TransactionHistory/>
          </DashboardLayout>
        }
        />
        <Route path="/Settings" element={
          <DashboardLayout>
            <Settings/>
          </DashboardLayout>
        }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App