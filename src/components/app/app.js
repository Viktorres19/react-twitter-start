import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

//import './app.css';
//import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
/*наслідування*/
const StyledAppBlock = styled(AppBlock)`
  background-color: transparent;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'Going to learn Python', important: false, id: 2},
        {label: 'Going to learn Node', important: false, id: 3},
        {label: 'It\'s all good', important: true, id: 4}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // створили новий масив
      // const newArray = [...before, ...after];
      const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
      // і замінили їм старий, не мутуючи стейт напряму
      return {
        data: newArray
      }
    })
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArray = [...data, newItem]
      return {
        data: newArray
      }
    })
  }

  render() {
    return (
      <StyledAppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </StyledAppBlock>
    )
  }
}