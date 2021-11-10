/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/'
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  }
};