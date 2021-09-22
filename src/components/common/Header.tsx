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
    <nav className="nav-header">
      <div>
        <Link to="/">
          <img
            className="img-home"
            src={`${theBaseImageURL}assets/images/home.svg`}
            alt="Home"
          />
        </Link>
        <Link to="/">
          <h1 className="h1-home">My Baking Recipe</h1>
        </Link>
      </div>
      {
        userId
          ? (
            <div className="div-user-info">
              <p className="p-user-name">
                <Link to="/">
                  {splitReturnFirst(userId)('@')}
                </Link>
              </p>
              <button
                className="button-header"
                type="button"
              >
                New Recipe
              </button>
              <button
                className="button-header"
                type="button"
                onClick={onSignOut}
              >
                Logout
              </button>
              <img
                className="img-user-icon"
                src={`${theBaseImageURL}assets/images/new-recipe.svg`}
                alt="New Recipe"
              />
              <img
                className="img-user-icon"
                src={`${theBaseImageURL}assets/images/close-outline.svg`}
                onClick={onSignOut}
                alt="Logout"
              />
            </div>
          ) : (
            <>
              <button
                className="button-header"
                type="button"
                onClick={onSignIn}
              >
                Sign in (Google)
              </button>
              <img
                className="img-user-icon"
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
