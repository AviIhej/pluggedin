import React, { useState } from 'react';
import './Login.css'
import { auth } from '../../firebase';
import { useTheme } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profilePic: userAuth.user.photoURL
            }))
        }).catch(err => {
            alert(err)
        })
    }

    const register = () => {
         if(!name){
             alert("Please input a name")
         }

         auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))

                alert(`Successful Registration! The username is ${name} and the photo Url has been saved`)
            }).catch(err => {
                console.log(err)
            })
         })
    }

    return (
        <div className="login">
            <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" />
            <form className="login__form">
                <input type="text" placeholder="Fill Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <input type="text" placeholder="Profile Pic"  value={profilePic} onChange={e => {
                    setProfilePic(e.target.value)
                }}/>
                <input type="text" placeholder="Email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member
                <span className="login__register" onClick={register}> Register Now</span>
             </p>
        </div>
    )
}

export default Login