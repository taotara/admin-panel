import React, { useContext } from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

function Navbar() {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='topIcon' />
            English
          </div>
          <div className="item">
            <DarkModeIcon className='topIcon' onClick={() => dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='topIcon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='topIcon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='topIcon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='topIcon' />
          </div>
          <div className="item">
            <img src="https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699505__340.jpg" alt="avatar" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar