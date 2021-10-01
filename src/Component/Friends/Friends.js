import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'
const Friends = () => {
    const [friends, setFriend] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h2>Friends: {friends.length}</h2>
            <div className='friend-container'>
            {
                friends.map(friend => <Friend 
                friend={friend}
                key={friend.id}
                ></Friend>)
            }
            </div>
           
        </div>
    );
};

export default Friends;