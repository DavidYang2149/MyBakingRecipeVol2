/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';

import { theBaseImageURL } from 'src/utils/static';
import { splitReturnFirst } from 'src/utils/tools';

import './Header.scss';

interface Props {
  userId: string;
  onSignIn: () => void;
  onSignOut: () => void;
}

const Header = ({ userId, onSignIn, onSignOut }: Props) => {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <img
            className="homeImg"
            src={`${theBaseImageURL}assets/images/home.svg`}
            alt="Home"
          />
        </Link>
        <Link to="/">
          <h1 className="homeH1">My Baking Recipe</h1>
        </Link>
      </div>
      {
        userId
          ? (
            <div className="userInfo">
              <p className="userName">
                <Link to="/">
                  {splitReturnFirst(userId)('@')}
                </Link>
              </p>
              <button
                className="headerButton"
                type="button"
              >
                New Recipe
              </button>
              <button
                className="headerButton"
                type="button"
                onClick={onSignOut}
              >
                Logout
              </button>
              <img
                className="userIcon"
                src={`${theBaseImageURL}assets/images/new-recipe.svg`}
                alt="New Recipe"
              />
              <img
                className="userIcon"
                src={`${theBaseImageURL}assets/images/close-outline.svg`}
                onClick={onSignOut}
                alt="Logout"
              />
            </div>
          ) : (
            <>
              <button
                className="headerButton"
                type="button"
                onClick={onSignIn}
              >
                Sign in (Google)
              </button>
              <img
                className="userIcon"
                src={`${theBaseImageURL}assets/images/login-google.svg`}
                onClick={onSignIn}
                alt="singIn"
              />
            </>
          )
      }
    </nav>
  );
};

export default Header;
