export default [
  {
    input: "src/index.js",
    output: {
      dir: "lib/cjs",
      format: "cjs"
    }
  },
  {
    input: "src/index.js",
    output: {
      dir: "lib/es",
      format: "es"
    }
  },
  {
    input: "src/index.js",
    output: {
      dir: "lib/umd",
      name: "bundle",
      format: "umd"
    }
  }
];

