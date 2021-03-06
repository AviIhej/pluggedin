import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './HeaderOption.css';

const HeaderOption = ({ Icon, title, onClick, avatar }) => {

    const user = useSelector(selectUser)

    return <div className="headerOption" onClick={onClick}>
        { Icon && <Icon className="headerOption__icon" /> }
        { avatar && <Avatar src={user?.photoUrl} className="headerOption_avatar">{user?.email[0]}</Avatar> }
        <h3 className="headerOption__title">{title}</h3>
    </div>
}

export default HeaderOption