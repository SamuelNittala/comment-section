import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    // eslint-disable-next-line quotes
    body: `'Rubik', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'hsl(223, 19%, 93%)',
      },
    },
  },
  colors: {
    brand: {
      moderateBlue: 'hsl(238, 40%, 52%)',
      lightGrayishBlue: 'hsl(239, 57%, 85%)',
      softRed: 'hsl(358, 79%, 66%)',
      paleRed: 'hsl(357, 100%, 86%)',
      darkBlue: 'hsl(212, 24%, 26%)',
      grayishBlue: 'hsl(211, 10%, 45%)',
      lightGray: 'hsl(223, 19%, 93%)',
      veryLightishGray: 'hsl(228, 33%, 97%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
});

export default customTheme;
