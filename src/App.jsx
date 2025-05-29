import { useState } from 'react'
import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './Portfolio'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Portfolio />} />
        </Routes>
      </div>
    </>
  )
}

export default App
