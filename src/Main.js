import axios from 'axios';
import React from 'react';

const Main = ({logout, user}) => {
    const onLogout = () => {
        axios.post('/logout', null, {
            withCredentials: true,
        })
        .then(() => logout())
        .catch((error) =>{
            console.log(error)
        })
        console.log(user.nickname)
    }

    return( user == null ? 
        <div>Loading...</div> :
        <div>
            <div>
                <h2>Main Page</h2>
            </div>
            <div>
                <button onClick={onLogout}>로그아웃</button>
            </div>
            <div>
                안녕하세요 <span className='name'>{user.userId}</span> 님
            </div>
        </div>
        
    )
}

export default Main;