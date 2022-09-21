import React from 'react';

function Main(props) {
    const isLogin = props.isLogin

    const logout = () => {
        sessionStorage.removeItem('user_id')
        document.location.href = '/'
    }

    return(
        <div>
            <div>
                <h2>Main Page</h2>
            </div>
            <div>
                <button onClick={logout}>로그아웃</button>
            </div>
        </div>
        
    )
}

export default Main;