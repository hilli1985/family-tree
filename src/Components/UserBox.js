    import React, { Component } from 'react';
    import { observable, action,computed } from "mobx";
    import {observer, inject} from 'mobx-react';


    @inject("store")
    @observer class UserBox extends Component {
        @observable name;
        @observable imgUrl;
        @observable showMe=true;

        
        @action onChange= (event) => {
            this[event.target.getAttribute('property')] = event.target.value;
        }
        
        @action onSubmit = (event) => {
            event.preventDefault();
            this.props.store.addChildToParent(this.name,this.imgUrl,this.props.id)
        }

        @action closeMe = () => {
            this.showMe=false;
        }

        render(){
            return (<div id={this.props.id} className='cover-modal'>
            {this.showMe&&<div className='modal-body'>
            <div className='close-modal' onClick={this.closeMe}>X</div>
            <div className='modal-title'>Add Child For {this.props.name}</div>
            <form className='form-modal' onSubmit={this.onSubmit}>
                <input className='input-modal' type="text" name="name" property='name' value={this.name} onChange={this.onChange} placeholder="User name" /><br/>
                <input className='input-modal' type="text" name="name" property='imgUrl' value={this.imgUrl} onChange={this.onChange} placeholder="img Url" /><br/>
                <input className='submit-modal' type="submit" value="Add" />
            </form>
        </div>}</div>);
        }
        
    }
    export default UserBox;