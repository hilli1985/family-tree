import React, { Component } from "react";
import { observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class SearchForm extends Component {
  @observable name;

  @action
  onChange = event => {
    this[event.target.getAttribute("property")] = event.target.value;
  };

  @action
  onSubmit = event => {
    event.preventDefault();
    this.props.store.getUserByName(this.name)
  };

  render() {
    return (
      <div>
        SearchForm
        <form onSubmit={this.onSubmit}>
        <input type="text"  list="data" name="name" property="name" value={this.name} onChange={this.onChange} placeholder="User name"/>
          <br />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
export default SearchForm;
