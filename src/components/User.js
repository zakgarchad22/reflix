import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const User = ({ user, updateUser }) => {
    const handleUpdateUser = () => updateUser(user.id)

    return (
        <Link to='/catalog'>
            <div onClick={handleUpdateUser} className="user-box">{user.name}</div>
        </Link>
    )
}

export default User;
