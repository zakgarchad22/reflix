import React from 'react';
import User from './User';


const Landing = ({ users, updateUser }) => {
    return (
        <div>
            <div id="user-container">
                {users.map(user => <User key={user.id} user={user} updateUser={updateUser} />)}
            </div>
        </div>
    )
}

export default Landing;
