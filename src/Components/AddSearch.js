import React, { Component } from 'react';
import { observable, action,computed } from "mobx";
import {observer, inject} from 'mobx-react';

import AddForm from './AddForm';
import SearchForm from './SearchForm';
@observer class AddSearch extends Component {
    @observable isAdd = true;
    
    @action setForm = (event)=> {
        this.isAdd = !(this.isAdd);
    }
    
    render() {
        return (<div>
            {(this.isAdd)
                ?<AddForm/>
                :<SearchForm/>
            }
            <div onChange={this.setForm}>
            <input type="radio" value="Add" defaultChecked name="toggle"/>Add
            <input type="radio" value="Search" name="toggle"/>Search
            </div>
            </div>)
        }
    }
    export default AddSearch;