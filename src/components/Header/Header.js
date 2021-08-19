import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from '../HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css';
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Header(){

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header-wrapper">
           <div className="header_left">
               <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="avatar" />
               <div className="header__search">
                    <label><SearchIcon /></label>
                    <input type="text"  placeholder="Search" />
               </div>
           </div>
           <div className="header_right">
               <HeaderOption Icon={HomeIcon} title="Post"/>
               <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
               <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
               <HeaderOption Icon={ChatIcon} title="Messaging"/>
               <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
               <HeaderOption onClick={logoutUser} avatar={true} title="Me" />
           </div>
        </div>
    )
}

export default Header