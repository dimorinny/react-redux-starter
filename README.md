React-Redux-Router Starter
==========================

The minimal dev environment to enable live-editing React components with redux state and router.

### Usage

```
npm install
npm local
open http://localhost:3000
```

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Dependencies

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)
* [Redux](http://redux.js.org/)
* [redux-actions](https://github.com/acdlite/redux-actions)
* [type-to-reducer](https://github.com/tomatau/type-to-reducer)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)
* [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
* [Radium](https://github.com/FormidableLabs/radium)
* [react-router](https://github.com/reactjs/react-router)
* [redux-router](https://github.com/acdlite/redux-router)

#### Notes
> **redux-actions** created to escape boilerplate code in action creators

> **type-to-reducer** create reducer functions based on an object keyed by action types

> **whatwg-fetch** polyfill for new fetch api

> **redux-promise-middleware** simple promise middleware with type to reducer support

> **Radium** is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS

> **redux-router** is a redux bindings for React Router

#### Development dependencies

* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [cross-env](https://www.npmjs.com/package/cross-env)

### Notes
> **cross env** allows us to provide a script which sets an environment using unix style. In our project it will allow us to distinguish between development and production builds.
