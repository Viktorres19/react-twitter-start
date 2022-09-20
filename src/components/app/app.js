import React from 'react';
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
  background-color: pink;
`;

const App = () => {

  const data = [
    {label: 'Going to learn React', important: true, id: 1},
    {label: 'Going to learn Python', important: false, id: 2},
    {label: 'Going to learn Node', important: false, id: 3},
    {label: 'It\'s all good', important: true, id: 4}
  ];

  return (
    <StyledAppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </StyledAppBlock>
  )
}

export default App;