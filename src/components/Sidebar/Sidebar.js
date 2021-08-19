import React,{ useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import './Sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser)


    useEffect(() => {

    }, [])

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar__wrapper">
            <div className="sidebar__top">
                <img alt="sidebar__img" src="https://images.unsplash.com/photo-1628871733245-89dbf91684d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTEzOTMyNA&ixlib=rb-1.2.1&q=80&w=1080" />
                {/* //if the user doesnt have profile pic, use thefirst character in their email */}
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar> 
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

                <div className="sidebar__stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statnumber">33</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statnumber">33</p>
                    </div>
                </div>
                
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                { recentItem('reactjs') }
                { recentItem('programming') }
                { recentItem('software engineering') }
                { recentItem('design') }
                { recentItem('developer') }
            </div>
        </div>
    )
}

export default Sidebar