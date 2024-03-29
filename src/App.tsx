import React, { useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Loading from 'src/components/common/Loading';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import NotFoundPage from 'src/pages/common/NotFoundPage';
import RecipePage from 'src/pages/recipe/RecipePage';
import RecipesPage from 'src/pages/recipe/RecipesPage';
import { requestSessionCheck } from 'src/redux/user/user';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestSessionCheck());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HeaderContainer />
        <div className="div-main">
          <Switch>
            <Route exact path="/" component={RecipesPage} />
            <Route path="/recipe/:id" component={RecipePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Suspense>
    </>
  );
};

export default App;
