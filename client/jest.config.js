module.exports = {
  modulePaths: ["src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>src/jest.setup.ts"],
};
