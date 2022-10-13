import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Login from './Login';

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  
  //로그인
  const onLogin = () => {
    setIsLogin(true);
  }

  //로그아웃
  const logout = () => {
    setIsLogin(false);
    return axios
    .post('http://localhost:8080/logout')
    .then((res)=> {
      setIsLogin(false)
    })
    .catch((err)=> {
      console.log(err.response.data)
    })
  }

  // const authHandler = () => {
  //   return axios
  //     .get("http://localhost:8080/logincheck")
  //     .then((res)=>{
  //       console.log(res.data)
  //       setIsLogin(true)
  //       console.log("여기?")
  //     })
  //     .catch((err)=> {
  //       console.log(err.res.data)
  //     });
  // };

  // useEffect(() => {
  //   authHandler();
  // }, []);

  return (
    <div>
      {isLogin ?
        <div>
          <div>
            <h2>Main Page</h2>
          </div>
          <div>
            <button onClick={logout}>로그아웃</button>
          </div>
        </div> : 
        <Login isLogin={isLogin} onLogin={onLogin} />}
    </div>
  )
}

export default App;
