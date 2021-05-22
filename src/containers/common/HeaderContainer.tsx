import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'src/components/common/Header';
import { RootState } from 'src/redux/rootReducer';
import { requestLogin, requestLogout } from 'src/redux/user/user';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const { user: { userId } } = useSelector((state: RootState) => ({
    user: state.user,
  }));

  const handleSignInClick = () => {
    dispatch(requestLogin());
  };

  const handleSignOutClick = () => {
    dispatch(requestLogout());
  };

  return (
    <Header
      userId={userId}
      onSignIn={handleSignInClick}
      onSignOut={handleSignOutClick}
    />
  );
};

export default HeaderContainer;
