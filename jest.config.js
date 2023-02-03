module.exports = {
  testEnvironmentOptions: {
    url: 'http://localhost:8000/sub-demo/',
  },
  collectCoverage: true,
  testEnvironment: 'jsdom',
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss|stylus)$': require.resolve('identity-obj-proxy'),
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/src/.umi/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: ['**/?*.(spec|test|e2e).(j|t)s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': require.resolve(
      './script/jest/transformers/javascript',
    ),
    '^.+\\.(css|less|sass|scss|stylus)$': require.resolve(
      './script/jest/transformers/css',
    ),
    '^(?!.*\\.(js|jsx|ts|tsx|css|less|sass|scss|stylus|json)$)':
      require.resolve('./script/jest/transformers/file'),
  },
  verbose: true,
  transformIgnorePatterns: ['/node_modules/(?!(antd-mobile)/)'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './__test__/jest.setup.tsx',
  ],
};
