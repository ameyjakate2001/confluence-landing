import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { AiFillQuestionCircle } from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='flex' id='logo'>
          <img
            src='https://www.demandfarm.com/wp-content/uploads/2023/06/demandfarm-logo-2.svg'
            alt='DemandFarm'
          />
        </div>
        <ul className='flex'>
          <li>Home </li>
          <li>Recent </li>
          <li>Spaces</li>
          <li>Teams</li>
          <li>Apps</li>
          <li>Templates</li>
          <li>
            <button className='create-btn'>Create</button>
          </li>
        </ul>
      </nav>
      <div className='flex' id='search'>
        <span>
          <input class='nosubmit' type='search' placeholder='Search' />
        </span>
        <IoIosNotifications />
        <AiFillQuestionCircle />
        <div className='flex name'>AJ</div>
      </div>
    </header>
  )
}

export default Header
