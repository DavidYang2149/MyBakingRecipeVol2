import React, { useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';

import Loading from 'src/components/common/Loading';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import NotFoundPage from 'src/pages/common/NotFoundPage';
import RecipesPage from 'src/pages/recipe/RecipesPage';
import { requestSessionCheck } from 'src/redux/user/user';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestSessionCheck());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeaderContainer />
        <div className="main">
          <Switch>
            <Route exact path="/" component={RecipesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Suspense>
    </>
  );
};

export default App;
