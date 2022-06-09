module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  collectCoverage: false,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
