import { Wrapper } from 'App.styles';
import React from 'react';
import { createBoard } from 'utils/setup';

const App = () => {
  console.log(createBoard());
  return (
    <Wrapper>
      <p>Hello world</p>
    </Wrapper>
  );
};

export default App;
