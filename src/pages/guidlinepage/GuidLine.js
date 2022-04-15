import { guideline } from 'assets'
import React from 'react'
import { Outlet } from 'react-router-dom'
import './guideline.css'


export const GuidLine = () => {
  return (
      
    <div className="guideline-container">
    <div className='Quidline-Box'>

      <div className="guideline-wallpaper">
        <img src={guideline} alt="guidline Wallpaper" />
      </div>

            <div className='guidline'>
                <h3 className='guideline-heading'>Quiz Rules</h3>

                <p>There are total 10 questions in this section.</p>
                <p>For Each correct answer there will be 10 point.</p>
                <p>For Each incorrect answer there will be 0 point.</p>
                <p>You may not change the option once opted</p>
               
            <Outlet />
            </div>
        </div>
        </div>
  )
}



