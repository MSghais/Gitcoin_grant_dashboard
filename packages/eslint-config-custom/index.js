module.exports = {
  // extends: ["next", "turbo", "prettier"],
  extends: ["next", "turbo"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/no-unescaped-entities": "off",
  },
};
