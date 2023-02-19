import React from "react";
import { Button } from 'antd';

const RightMenu = () => {
    const logOut = () => {
        localStorage.removeItem('userId')
        localStorage.removeItem('user')
        window.location.reload()
    }
    const onClick = (e) => {
        const key = e.key
        switch (key) {
            case 'logout':
                logOut()
                break;

            default:
                break;
        }
    };
    return <div >
        <Button style={{ border: '2px solid #f8971d', color: '#f8971d', marginRight: '10px' }}>
            Log In
        </Button>
        <Button style={{ border: '2px solid #f8971d', color: 'white', backgroundColor: '#f8971d' }}>
            Sign Up
        </Button>
    </div>
};
export default RightMenu;