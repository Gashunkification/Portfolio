module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "airbnb",
  rules: {
    "react/prop-types": 0,
    "spaced-comment": {
      exceptions: ["#region", "#endregion"],
    },
  },
}
