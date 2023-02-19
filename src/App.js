import React from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './scss/index.scss'
import Navbar from './component/nav/NavBar';
import { Footer } from './component/Footer';


function App() {
  const pageList = [
    {
      path: '/*',
      component: <Navigate to="/home" replace />
    },
    {
      path: '/home',
      component: <Home />

    }
  ]

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Routes>
          {pageList.map(e => {
            return <Route path={e.path} element={
              e.component
            } />
          })}
        </Routes>
      </Layout>
      <Footer />
    </Layout>
  )
}

export default App;
