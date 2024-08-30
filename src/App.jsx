import React from 'react'
import MainPage from './Component/MainPage'
import { Route , Routes } from 'react-router-dom'
import MealInfo from './Component/MealInfo'

const App = () => {
  return (
    <div className='app'>
        
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/:mealid' element={<MealInfo/>} />
        </Routes>
    </div>
  );
}

export default App