import React from 'react';

import styled from '@emotion/styled';

const Main = styled.main({
  /* Desktop */
  position: 'relative',
  width: 1440,
  height: 900,
  background: '#FFFFFF',
})

const Header = styled.header({
  position: 'absolute',
  width: 1440,
  height: 70,
  left: 0,
  top: 0,
});

const HeaderLine = styled.div({
  position: 'absolute',
  width: 1440,
  height: 0,
  left: 0,
  top: 70,

  border: '1px solid #DBDBDB',
})

const Title = styled.p({
  position: 'absolute',
  width: 300,
  height: 20,
  left: 30,
  // top: 15,

  fontFamily: 'Karla Tamil Inclined',
  fontStyle: 'italic',
  fontWeight: 'normal',
  fontSize: 20,
  // lineHeight: 23,

  color: '#000000',
});

const SearchBox = styled.input({
  /* search box */
position: 'absolute',
width: 300,
height: 36,
left: 570,
top: 17,

background: '#FAFAFA',
border: '1px solid #DBDBDB',
boxSizing: 'border-box',
borderRadius: 2,
});

export default function App() {
  return (
    <Main>
      <Header>
        <Title>My Baking Recipe</Title>
        <SearchBox />
        <HeaderLine />
      </Header>
      <div>
        레시피명
      </div>
    </Main>
  );
}
