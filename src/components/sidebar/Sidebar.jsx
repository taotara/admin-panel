import React from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MemoryIcon from '@mui/icons-material/Memory';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top"><span className="logo">lamadmin</span></div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icon" /><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <li><PermIdentityIcon className="icon" /><span>Users</span></li>
          <li><StorefrontIcon className="icon" /><span>Products</span></li>
          <li><LocalGroceryStoreIcon className="icon" /><span>Orders</span></li>
          <li><AirportShuttleIcon className="icon" /><span>Delivery</span></li>
          <p className="title">USEFUL LINKS</p>
          <li><InsightsIcon className="icon"/><span>Stats</span></li>
          <li><NotificationsNoneIcon className="icon" /><span>Notifications</span></li>
          <p className="title">SERVICES</p>
          <li><MonitorHeartIcon className="icon" /><span>System Health</span></li>
          <li><MemoryIcon className="icon" /><span>Logs</span></li>
          <li><TuneIcon className="icon" /><span>Settings</span></li>
          <p className="title">USERS</p>
          <li><AssignmentIndIcon className="icon" /><span>Profile</span></li>
          <li><LogoutIcon className="icon" /><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar