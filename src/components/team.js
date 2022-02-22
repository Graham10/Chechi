import React from 'react'
import Staff from '../components/staff'

function team() {
  return (
    <div className='team'>
        <h2>Our Team</h2>
        <div className='team_content'>
            <Staff image='../images/robo.jpg' name='Graham Kavulavu' rank='Intern' description='Joined the company at the start of the year' />
            <Staff image='../images/shelby.jpg' name='Silas Magare' rank='CEO' description='Founder of Chechi Limited' />
            <Staff image='../images/simon.jpg' name='Amos Nyaundi' rank='IT Lead' description='Has been with the company since its founding days' />
        </div>
    </div>
  )
}

export default team