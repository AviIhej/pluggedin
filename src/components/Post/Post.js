import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import InputOption from '../InputOption/InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ShareOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

function Post(props){
    const { name, description, message, photoUrl  } = props;
    return (
        <div className="post">
            <div className="post__header">
                { Avatar && <Avatar src={photoUrl} /> }
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__postButtons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="grey"/>
            </div>
        </div>
    )
}

export default Post