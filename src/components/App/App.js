import React from 'react';
import FooterInfo from '../../containers/ItemInfo';
import Header from '../Header';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

const App = () => (
    <div>
        <Header/>
        <AddTodo/>
        <VisibleTodoList/>
        <FooterInfo/>
    </div>
);

export default App;