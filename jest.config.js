module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/tests/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};