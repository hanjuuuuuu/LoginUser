import React, { useCallback, useEffect, useState } from 'react';
import Login from './Login';

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  
  //로그인
  const onLogin = () => {
    setIsLogin(true);
  }


  const logout = () => {
    //sessionStorage.removeItem('user_id')
    //document.location.href = '/'
  }

  // useEffect(() => {
  //   if(sessionStorage.getItem('user_id') === null){
  //     console.log('isLoginx:', isLogin)
  //   } else{
  //     setIsLogin(true)
  //     console.log('id:', sessionStorage.getItem('user_id'))
  //     console.log('isLogin:', isLogin)
  //   }
  // })

  return (
    <div>
      {isLogin ?
        <div>
          <div>
            <h2>Main Page</h2>
          </div>
          <div>
            <button onclick={logout}>로그아웃</button>
          </div>
        </div> : 
        <Login isLogin={isLogin} onLogin={onLogin} />}
    </div>
  )
}

export default App;
