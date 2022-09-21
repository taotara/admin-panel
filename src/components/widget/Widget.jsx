import React from 'react';
import './widget.css';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
    let data = "title";

        // temporary
        const amount = 100;
        const diff = 20;

        switch(type){
            case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineIcon className='widgetIcon' style={{color:"crimson", backgroundColor:"rgba(255, 0, 0, 0.2)"}}/>,
            };
            break;
            case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartOutlinedIcon className='widgetIcon' style={{color:"goldenrod", backgroundColor:"rgba(255, 0, 0, 0.2)"}}/>,
            };
            break;
            case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className='widgetIcon' style={{color:"green", backgroundColor:"rgba(255, 0, 0, 0.2)"}}/>,
            };
            break;
            case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletIcon className='widgetIcon' style={{color:"purple", backgroundColor:"rgba(255, 0, 0, 0.2)"}}/>,
            };
            break;
            default:
                break;
        }
  return (
    <div className='widget'>
        <div className="left">
            <span className="widgetTitle">{data.title}</span>
            <span className="widgetCounter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive"> 
                <KeyboardControlKeyIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget