import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FriendDetails.css'

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const history = useHistory();
   
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))

    }, []);
    const handleClick = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h2>Friend Position: {friendId}</h2>
            <h3>{friend.name}</h3>
            <h3>{friend.phone}</h3>
            <h4>{friend.website}</h4>
            <p>company:{friend.company?.name}</p>
            <button onClick={handleClick}>see all Friends</button>
        </div>
    );
};

export default FriendDetails;