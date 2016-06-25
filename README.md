React-Redux Starter
===================

The minimal dev environment to enable live-editing React components with redux state.

### Usage

```
npm install
npm start
open http://localhost:3000
```

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Dependencies

* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)
* [Redux](http://redux.js.org/)
* [redux-actions](https://github.com/acdlite/redux-actions)
* [type-to-reducer](https://github.com/tomatau/type-to-reducer)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)
* [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)

### Notes
> **redux-actions** created to escape boilerplate code in action creators

> **type-to-reducer** create reducer functions based on an object keyed by action types

> **whatwg-fetch** polyfill for new fetch api

> **redux-promise-middleware** simple promise middleware with type to reducer support 

### Development dependencies

* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [cross-env](https://www.npmjs.com/package/cross-env)

### Notes
> **cross env** allows us to provide a script which sets an environment using unix style. In our project it will allow us to distinguish between development and production builds.
