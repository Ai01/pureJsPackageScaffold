module.exports = {
  extends: ["xo", "prettier"],
  env: {
    jest: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error"
  },
  plugins: ["prettier"]
};
