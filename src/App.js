import React, { useEffect, useState } from 'react';
import Login from './Login';
import Main from './Main';

function App () {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null){
      console.log('isLoginx:', isLogin)
    } else{
      setIsLogin(true)
      console.log('id:', sessionStorage.getItem('user_id'))
      console.log('isLogin:', isLogin)
    }
  })

  return (
    <div>
      {isLogin ?
        <Main isLogin={isLogin} /> : 
        <Login />}
    </div>
  )
}

export default App;
