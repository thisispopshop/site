module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/*.spec.ts"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};