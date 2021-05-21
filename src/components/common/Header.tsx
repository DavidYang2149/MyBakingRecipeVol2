/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export type HeaderProps = {
  userId: string;
  signInWithGoogle: () => void;
  signOut: () => void;
};

const Header = ({ userId, signInWithGoogle, signOut }: HeaderProps) => {
  return (
    <nav className="header">
      <div>
        <Link to="/">
          <img src="assets/images/home.svg" alt="Home" className="homeImg" />
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
                  {userId}
                </Link>
              </p>
              <button
                type="button"
              >
                New Recipe
              </button>
              <button
                className="headerButton"
                type="button"
                onClick={signOut}
              >
                Logout
              </button>
              <img
                className="userIcon"
                src="assets/images/new-recipe.svg"
                alt="New Recipe"
              />
              <img
                className="userIcon"
                src="assets/images/close-outline.svg"
                onClick={signOut}
                alt="Logout"
              />
            </div>
          ) : (
            <>
              <button
                className="headerButton"
                type="button"
                onClick={signInWithGoogle}
              >
                Sign in (Google)
              </button>
              <img
                className="userIcon"
                src="assets/images/login-google.svg"
                onClick={signInWithGoogle}
                alt="singIn"
              />
            </>
          )
      }
    </nav>
  );
};

export default Header;
