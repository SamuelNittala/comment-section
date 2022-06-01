import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import CommentCard from './component/CommentCard';
import customTheme from './theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CommentCard />
    </ChakraProvider>
  );
}

export default App;
