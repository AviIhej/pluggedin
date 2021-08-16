import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar__wrapper">
            <div className="sidebar__top">
                {/* <img alt="sidebar__img" /> */}
                <Avatar src="https://images.unsplash.com/photo-1429497612798-1f189166a08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTEzNzIyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" className="sidebar__avatar" />
                <h2>William Henry</h2>
                <h4>This is my profile watch me</h4>

                <div className="sidebar__stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className="sidebar__statnumber">33</p>
                    </div>
                </div>
                
            </div>
            <div className="sidebar__bottom">

            </div>
        </div>
    )
}

export default Sidebar