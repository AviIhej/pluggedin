import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from '../HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css'

function Header(){
    return (
        <div className="header-wrapper">
           <div className="header_left">
               <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="avatar" />
               <div className="header__search">
                    <label><SearchIcon /></label>
                    <input type="text" />
               </div>
           </div>
           <div className="header_right">
               <HeaderOption Icon={HomeIcon} title="Post"/>
               <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
               <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
               <HeaderOption Icon={ChatIcon} title="Messaging"/>
               <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
               <HeaderOption avatar="https://images.unsplash.com/photo-1429497612798-1f189166a08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTEzNzIyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" title="Me" />
           </div>
        </div>
    )
}

export default Header