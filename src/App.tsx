import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { injectGlobal } from '@emotion/css';
import styled from '@emotion/styled';

import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import Recipe404Page from './pages/Recipe404Page';

injectGlobal(`
/* 
  Origin: http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`);

const Header = styled.div`
  background: greenyellow;
  padding: 10px;
  border: 3px solid rgb(50,50,40);
`;

const Main = styled.div`
  background: mediumseagreen;
  padding: 10px;
  border: 3px solid rgb(50,50,40);
`;

const Footer = styled.div`
  background: darkgreen;
  padding: 10px;
  border: 3px solid rgb(50,50,40);
`;

export default function App() {
  return (
    <>
      <Header>
        <p>My Baking Recipe</p>
        <p>Sign in</p>
        <p>Sign up</p>
      </Header>
      <Main>
        <Switch>
          <Route exact path="/" component={RecipesPage} />
          <Route path="/recipe" component={RecipePage} />
          <Route component={Recipe404Page} />
        </Switch>
      </Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </>
  );
}
