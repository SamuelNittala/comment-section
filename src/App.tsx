import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme';
import CommentList from './component/CommentList';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CommentList />
    </ChakraProvider>
  );
}

export default App;
