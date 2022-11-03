import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Main from './Main';


const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  
  //로그인
  const onLogin = () => {
    setIsLogin(true);
  }

  //로그아웃
  const logout = () => {
    setIsLogin(false);
  }

  const authHandler = () =>{  //초기 화면 렌더링 시, 로그인 유지 확인하여 페이지 렌더링
    return axios
    .get("http://localhost:8091/logincheck")
    .then((res)=>{
        console.log(res.data);
        onLogin();
    })
    .catch((err) => {
        console.log(err.res.data);
    });
}

useEffect(()=>{
    authHandler();
});


  return (
    <div>
      {isLogin ?
        <Main isLogin={isLogin} logout={logout}/> : 
        <Login isLogin={isLogin} onLogin={onLogin} />}
    </div>
  )
}

export default App;
