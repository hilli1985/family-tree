import React, { Component } from 'react';
import './App.css';
import {observer, inject} from 'mobx-react';
import User from './Components/User';
import AddSearch from './Components/AddSearch';

@inject("store")
@observer
class App extends Component {
  render() {
    let user = this.props.store.currentUser;
    if (!user.Children){
      return (
        <div className="Tree-container">
        <h1 className="Tree-title">Welcome to Family Tree</h1><hr/>
        <div className="Tree-title">
        <AddSearch/>
        </div>
        <hr/></div>
      )

    }
    return (
      <div className="Tree-container">
      <h1 className="Tree-title">Welcome to Family Tree</h1><hr/>
      <div className="Tree-title">
      <AddSearch/>
      </div>
      <hr/>
      <div className="container">
      <div className="container-child">
        <User id={user.id} key={user.id} name={user.userName} img={user.imgUrl}/>
      </div>
      <div className="container-child ">
          {user.Children.map((child)=>
            <User id={child.id} key={child.id} name={child.userName} img={child.imgUrl}/>
        )}</div>
      </div>

      </div>
        );
      }
    }
    export default App;
    