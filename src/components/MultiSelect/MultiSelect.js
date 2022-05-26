import React, { Component } from "react";
import "./MultiSelect.css";

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToChoose: [],
      itemsChosen: [],
      stateFilter: {
        excludes: [],
        searchTerm: "",
      },
    };
  }

  getItemsToChoose() {
    const { excludes, searchTerm } = this.state.stateFilter;
    const itemsToChoose = this.props.items
      .filter(i => excludes.every(e => e !== i))
      .filter(i => i.includes(searchTerm));
    return itemsToChoose;
  }

  handleAddItem = (item) => {
    const excludes = [...this.state.stateFilter.excludes, item];
    const newItemsChosen = [...this.state.itemsChosen, item];
    this.setState({
      stateFilter: { ...this.state.stateFilter, excludes },
      itemsChosen: newItemsChosen,
    });
  };

  handleRemoveItem = (item) => {
    const { itemsChosen } = this.state;
    const newItemsChosen = itemsChosen.filter(i => i !== item);
    const newItemsToChoose = [...this.state.itemsToChoose, item];
    this.setState({ itemsChosen: newItemsChosen });
  };

  handleStateSearchChange = (e) => {
    const { stateFilter } = this.state;
    this.setState(
      {
        stateFilter: { ...stateFilter, searchTerm: e.target.value },
      },
      () => {
        console.log(stateFilter.searchTerm);
      }
    );
  };

  renderItemsToChoose = () => {
    const { excludes } = this.state.stateFilter;
    if (!excludes) return null;

    const items = this.getItemsToChoose().map((item, index) => (
      <div
        className="item-to-choose d-flex justify-content-between align-items-center"
        key={index}
      >
        <span>{item}</span>&nbsp;
        <button className="add-item" onClick={() => this.handleAddItem(item)}>
          +
        </button>
      </div>
    ));
    return items;
  };

  renderItemsChosen = () => {
    return this.state.itemsChosen.map((item, index) => (
      <div class="item-chosen d-flex justify-content-between" key={index}>
        <span>{item}</span>
        <button
          className="remove-item"
          onClick={() => this.handleRemoveItem(item)}
        >
          -
        </button>
      </div>
    ));
  };

  render() {
    return (
      <div className="multiselect-container">
        <div className="d-flex">
          <input
            className="search-item form-control"
            type="search"
            placeholder="search for a state..."
            onChange={this.handleStateSearchChange}
          />
          <h6 className="mt-3 ms-2">States Chosen:</h6>
        </div>
        <div className="list-box-container">
          <div className="items-to-choose overflow-auto d-flex flex-wrap justify-content-between">
            {this.renderItemsToChoose()}
          </div>
          <div className="items-chosen overflow-auto d-flex flex-wrap align-content-start">
            {this.renderItemsChosen()}
          </div>
        </div>
      </div>
    );
  }
}

export default MultiSelect;
