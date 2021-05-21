import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import Header from 'src/components/common/Header';

describe('Header', () => {
  const signInWithGoogle = jest.fn();
  const signOut = jest.fn();

  const renderHeader = (user: string) => render((
    <MemoryRouter>
      <Header
        userId={user}
        signInWithGoogle={signInWithGoogle}
        signOut={signOut}
      />
    </MemoryRouter>
  ));

  context('with userId', () => {
    it('render Sign in', () => {
      const userId = 'test';
      const { container } = renderHeader(userId);

      expect(container).toHaveTextContent('Logout');
    });

    it('click newRecipe', () => {
      const userId = 'test';
      const { getByText } = renderHeader(userId);

      fireEvent.click(getByText('New Recipe'));
    });
  });

  context('without userId', () => {
    it('render Logout', () => {
      const userId = '';
      const { container } = renderHeader(userId);

      expect(container).toHaveTextContent('Sign in');
    });
  });
});
