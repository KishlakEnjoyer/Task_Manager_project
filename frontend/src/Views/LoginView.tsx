import React from "react";
import { Flex } from 'antd';
import "../styles/LoginView.css";
import LoginForm from "../Components/LoginForm";

const LoginView = () => {
    return (
        <Flex vertical gap="middle" justify="space-between" align="center" className="main-container">

            <Flex gap="middle" vertical className="header">
                <div className="logo">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="42" height="42" rx="21" fill="white"/>
                        <path d="M27.5 27.5652C27.5 28.8438 27.2284 29.9592 26.6853 30.9112C26.1538 31.8725 25.4027 32.6192 24.432 33.1512C23.4613 33.6832 22.3173 33.9492 21 33.9492C19.6942 33.9492 18.5502 33.6832 17.568 33.1512C16.5973 32.6192 15.8404 31.8725 15.2973 30.9112C14.7658 29.9592 14.5 28.8438 14.5 27.5652L14.5 21.9932L27.5 21.9932L27.5 27.5652ZM16.4933 25.5772L18.4867 23.9532L18.4867 27.8452C18.4867 28.3585 18.5849 28.7972 18.7813 29.1612C18.9893 29.5345 19.2782 29.8192 19.648 30.0152C20.0293 30.2112 20.48 30.3092 21 30.3092C21.5316 30.3092 21.9822 30.2112 22.352 30.0152C22.7218 29.8192 23.0049 29.5345 23.2013 29.1612C23.4093 28.7972 23.5133 28.3585 23.5133 27.8452L23.5133 23.9532L25.5067 25.5772L16.4933 25.5772Z" fill="black"/>
                        <path d="M19.8733 16.0309L22.6293 16.0309L14.5 21.3509L14.5 16.9129L19.648 13.7769L19.648 15.5969L14.5 12.4329L14.5 8.0509L22.6293 13.4129L19.8733 13.4129L27.5 8.3169L27.5 12.8389L22.872 15.6669L22.872 13.8469L27.5 16.6189L27.5 21.0849L19.8733 16.0309Z" fill="black"/>
                    </svg>
                    <h4 className="logo-title">XDGroup</h4>
                </div>
            </Flex>
            
            <Flex gap="middle" vertical style={{ position: 'relative' }}>
                <LoginForm />
            </Flex>

            <Flex gap="middle" vertical className="footer">
                All Rights Reserved {new Date().getFullYear()}. XDGroup
            </Flex>

            <div className="glow-blum big"></div>
            <div className="glow-blum small"></div>

        </Flex>
    );
};

export default LoginView;