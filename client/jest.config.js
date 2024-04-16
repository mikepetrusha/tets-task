/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.css$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};

export default config;
