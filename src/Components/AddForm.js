import React, { Component } from 'react';
import { observable, action,computed } from "mobx";
import {observer, inject} from 'mobx-react';


@inject("store")
@observer class AddForm extends Component {
    @observable name;
    @observable imgUrl;
    
    @action onChange= (event) => {
        this[event.target.getAttribute('property')] = event.target.value;
    }
    
    @action onSubmit = (event) => {
        event.preventDefault();
        this.props.store.addUser(this.name,this.imgUrl)
    }
    
    render(){
        return (<div>AddForm
            <form onSubmit={this.onSubmit}>
            <input type="text" name="name" property='name' value={this.name} onChange={this.onChange} placeholder="User name" /><br/>
            <input type="text" name="name" property='imgUrl' value={this.imgUrl} onChange={this.onChange} placeholder="img Url" /><br/>
            <input type="submit" value="Add" />
            </form>
            </div>);
        }
        
    }
    export default AddForm;