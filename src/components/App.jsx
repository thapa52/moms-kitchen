import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './Banner'
import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App