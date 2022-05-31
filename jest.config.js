module.exports = {
  // eslint-disable-next-line global-require
  ...require('@snowpack/app-scripts-react/jest.config.js')(),
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};
