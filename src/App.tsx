import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import CommentCard from './component/CommentCard';

function App() {
  return (
    <ChakraProvider>
      <CommentCard />
    </ChakraProvider>
  );
}

export default App;
