# React Native Quick Start

A basic React Native boilerplate bundled with a few packages and utilities to improve developer experience.

## Usage:

This boilerplate has been built using:

- GraphQL with a provider template configured to handle errors and subscriptions
- Styled Components (for native)
- React Navigation (with a custom helper utility)
- React Native Config for env vars, with multi environment support (see scripts in package.json)
- React Native Bootsplash has been used to generate splash screens, see docs on how to set your own
- Scaling utility functions for ensuring content scales correctly across different device sizes

SafeArea and StatusBar have already been set to avoid common issues with content overlapping device notches, or status bar content being insvisible/overlapped.

### Aliases:

Some aliases have been configured, for example @screens, @components, addtional aliases can be added, and will require configuration in the following files:

- jsconfig.json (for intellisense)
- babel.config.js
- eslintrc.js

### Scripts:

**To run the app in debug mode:**

```bash
yarn ios | android
```

**To run the app in release mode:**

```bash
yarn ios:release | android:release
```

**To rename:**

```bash
yarn rename <new_app_name> -b <new_bundle_id>
```

**To install pods:**

```bash
yarn ios:pods
```

**To clear your development environment and start from fresh (if things go wrong!):**

```bash
yarn nuke
```

## Useful resources:

React Native developer documentation: https://reactnative.dev/docs/getting-started

There's a few tools online that make creating app icons easy, for example: https://appicon.co/
