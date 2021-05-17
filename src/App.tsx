import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import NotFoundPage from './pages/common/NotFoundPage';
import HelloPage from './pages/common/HelloPage';
import TodosPage from './pages/todo/TodosPage';

import HeaderContainer from './containers/common/HeaderContainer';

export default function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={TodosPage} />
        <Route exact path="/Hello" component={HelloPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
