import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const {id,name, email, address, phone,website}=props.friend;
    const history = useHistory();
    const handleFriendClick = () =>{
        history.push(`/friend/${id}`)
    }
    return (

        <div style={{background:'gray', color:'white', borderRadius:'.3rem', border:'2px solid saddlebrown'}} className='friend-style'>
            
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h5>Phone: {phone}</h5>
            <p>Website: {website}</p>
            <p>City: {address.city}</p>
            <Link to={`/friend/${id}`}>visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
            <button >Click</button>
            </Link>
            <button onClick={handleFriendClick}>Friend Details</button>
            
        </div>
    );
};

export default Friend;