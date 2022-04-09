import React from 'react';
// import { Select } from 'antd';
import SiderDemo from './Page/About';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            square: Array.of('Jack','Lucy','Tom')
        };
    }

    renderSideDemo(){
        return <SiderDemo 
                value={this.state.square}
                
                    ></SiderDemo>
    }

    // handleClick(){
    //     alert('hello')
    // }

    render() {
        return (
            <div>
                <a href={'#/detail/'+this.state.square[0]}>去detail</a>
                {/* <SiderDemo ></SiderDemo> */}
                {this.renderSideDemo()}
                {/* {this.renderSideDemo(1)}
                {this.renderSideDemo(2)} */}
            </div>
        )
    }
}