module.exports = {
  extends: "airbnb",
  installedESLint: true,
  plugins: ["react"],
  rules: {
    "no-param-reassign": 0,
    "no-mixed-operators": [0],
    quotes: [1, "single"], //使用单引号，提示是警告
    quotes: [0, "double"], //使用双引号，关闭
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    "func-names": [0],
    "new-cap": [
      2,
      { newIsCap: true, capIsNew: true, capIsNewExceptions: ["List", "Map"] },
    ],
    "linebreak-style": [0],
  },
  env: {
    browser: true,
  },
};
