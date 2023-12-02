module.exports = {
  // extends: ["next", "turbo", "prettier"],
  extends: ["next", "turbo"],

  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    'react/no-unescaped-entities': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
