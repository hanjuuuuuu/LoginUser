import 'antd/dist/antd.min.css';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import axios from 'axios';


const Login = ({isLogin, onLogin}) => {
    const [form] = Form.useForm();
    const userTemplete = {
        "ID": "",
        "Password": "",
        "remember": ""
    }


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const onClick = () => {
        let userInform = form.getFieldsValue()

        userTemplete.ID = userInform.ID
        userTemplete.Password = userInform.password
        userTemplete.remember = userInform.remember
        console.log(userTemplete)

        axios.post("http://localhost:8080/login ", 
            userTemplete
        )
        .then((response)=> {
            console.log("----------------reponse--------------")
            console.log(response)
            if(response.data.ID === undefined || response.data.ID === null){
                alert('아이디 혹은 비밀번호가 틀렸습니다.')
            }
            else if(response.data.ID === userTemplete.ID) { 
                console.log(isLogin);      
                onLogin();  
                console.log(isLogin);                                                                                                                                            alert('로그인 성공')
                if(userTemplete.remember === true){
                    console.log('로그인 유지')
                    //sessionStorage.setItem('user_id', userTemplete.ID)
                    //document.location.href = '/'
                }
                
            }

        })
        .catch((error) =>{
            console.log(error)
        })
    }

return(
    <Form 
        form={form} 
        style={{paddingRight:30, paddingLeft:130, marginLeft:10, marginTop:300, marginRight:500}}
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
    <Form.Item style={{paddingRight:200, paddingLeft:350, marginTop:10}}
        label="ID"
        name="ID"
        rules={[
        {
            required: true,
            message: 'ID를 입력하세요.',
        },
        ]}
    >
    <Input />
    </Form.Item>

    <Form.Item style={{paddingRight:200, paddingLeft:350, marginTop:10}}
        label="Password"
        name="password"
        rules={[
        {
            required: true,
            message: 'password를 입력하세요.',
        },
        ]}
    >
        <Input.Password />
    </Form.Item>

    <Form.Item style={{paddingLeft:250, marginTop:10}}
        name="remember"
        valuePropName="checked"
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
    >
        <Checkbox>로그인 유지</Checkbox>
    </Form.Item>

    <Form.Item style={{marginLeft:100, marginTop: 10}}
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
    >
        <Button type="primary" htmlType="submit" style={{marginLeft:270, marginTop:10}} onClick={onClick}>
            로그인
        </Button>
    </Form.Item>

    <div style={{marginLeft:600, marginTop:40}}>----------------------------sns로 로그인----------------------------
    </div>

    <img style={{marginLeft:680, marginTop:15}} alt="google" src="img/ic_google.svg"></img> 
    <img style={{marginLeft:15, marginTop:15}} alt="naver" src="img/ic_naver.svg"></img>
    <img style={{marginLeft:15, marginTop:15}} alt="kakao" src="img/ic_kakao.svg"></img>
    </Form>
);
}

export default Login;