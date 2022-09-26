import React from 'react'
import './single.css'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/chart';

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <h1 className="slTitle">Information</h1>
            <div className="editButton">Edit</div>
            <div className="item">
              <img src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?cs=srgb&dl=pexels-regina-trissteria-13623557.jpg&fm=jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailitem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@mail.com</span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+555 555 5555</span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Elton St. 234 Garden Yd. Newyork</span>
                </div>
                <div className="detailitem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} />
          </div>
        </div>
        <div className="buttom"></div>
      </div>
    </div>
  )
}

export default Single