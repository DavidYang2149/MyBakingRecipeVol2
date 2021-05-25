import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';

import HeaderContainer from 'src/containers/common/HeaderContainer';
import NotFoundPage from 'src/pages/common/NotFoundPage';
import HelloPage from 'src/pages/common/HelloPage';
import TodosPage from 'src/pages/todo/TodosPage';
import { requestSessionCheck } from 'src/redux/user/user';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestSessionCheck());
  }, [dispatch]);

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
};

export default App;
