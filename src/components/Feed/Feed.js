import React, { useState, useEffect } from 'react';
// Icons
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../InputOption/InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
// Posts
import Post from '../Post/Post';
import './Feed.css'
import { db } from '../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const Feed = () => {

    const user = useSelector(selectUser)
    
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

     

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, [])

    function sendPost(e){
        e.preventDefault()
        db.collection('posts').add(    {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }
    
    return (
        <div className="feed">
            <div className="feed___inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form onSubmit={sendPost}>
                        <input type="text" value={input} onChange={(e) => {
                            setInput(e.target.value)
                        }} />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="input__feedOptions">
                    <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
                    <InputOption Icon={SubscriptionIcon} color="lightgreen" title="Video" />
                    <InputOption Icon={EventNoteIcon} color="orange" title="Event" />
                    <InputOption Icon={CalendarViewDayIcon} color="lightpink" title="Write Article" />
                </div>

                {/* Posts */}
            </div>
            { posts.map(({ id, data: { name, description, message, photoUrl } }) => {
                return <Post name={name}  description={description} message={message} photoUrl={photoUrl} key={id} /> 
            })}            
            
        </div>
    )
}

export default Feed