import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'


const App = () => {
  return (
    <>
      <div className='container-fluied h-auto bg-teal-50 flex items-center justify-center flex-column'>
        <Navbar />
        <Main />
      </div>
    </>
  )
}

export default App