# @kaizentech/eslint-config-typescript

This package contains TypeScript, React, and React Native style guides

## Installation
```bash
yarn add -D @kaizentech/eslint-config-typescript eslint prettier
```

## Usage
first of all create a .eslintrc.json file in the root of your project.

if you want to use React config add this

```json
{
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": "@kaizentech/typescript"
}

```

if you want to use React Native config add this

```json
{
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": "@kaizentech/eslint-config-typescript/react-native"
}

```
