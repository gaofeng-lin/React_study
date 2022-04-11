import React from 'react';
// import { Select } from 'antd';
import SiderDemo from './Page/About';


export default class Home extends React.Component {



    render() {
        return (
            <div>
                <a href={'#/detail'}>去detail</a>
                <SiderDemo ></SiderDemo>
            
            </div>
        )
    }
}