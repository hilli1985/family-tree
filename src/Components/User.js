import React, { Component } from 'react';
import UserBox from './UserBox';
import {observer, inject} from 'mobx-react';
import { observable, action,computed } from "mobx";

@observer
class User extends Component {
    @observable showModal = false;
    
    @action toggle = (event)=> {
        this.showModal = !(this.showModal);
    }

    render() {
        return (
            <div id={this.props.id} className='item user'>
            <div className='close-modal' onClick={this.toggle}>+</div>
            {this.props.name}
            <img src={this.props.img} alt="img"/>
            {this.showModal&&<UserBox id={this.props.id} name={this.props.name}/>}
            </div>
            )
        }
        
    }
    export default User;