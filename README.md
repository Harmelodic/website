# bp-frontend

How frontend apps are built.

## Technologies

### Development

- [React](https://reactjs.org/)  
Component-based development

- [Redux](https://redux.js.org/)  
Implementation of the Flux design pattern:  
`Action > Dispatcher > Store > View`  
or in the case where Middleware is used:  
`Middleware > Action(s) > Dispatcher > Store > View`

- [styled-components](https://www.styled-components.com/)  
CSS in your JavaScript.

- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/r)  
Local development server with hot-reloading & more.

- [Redux Devtools Extension](https://github.com/zalmoxisus/remote-redux-devtools)  
Local redux development enhancer that links with [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

- [redux-thunk](https://github.com/reduxjs/redux-thunk)  
Allows writing action creators (Middleware) that return a function instead of an action. Effectively allowing async Store dispatches.

### Testing

- [Cypress](https://www.cypress.io/)  
End to End Testing  
Stubs and Mocks  
Assertions

- [Enzyme](http://airbnb.io/enzyme/)  
Testing React components in isolation

- [Jest](https://facebook.github.io/jest/)  
React Snapshot testing

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) (Browser Extension)  
Auditing

- [Pa11y](http://pa11y.org/)  
Accessibility Testing

### Build

- [Babel](https://babeljs.io/)

    - Babel Core  
    JS compiler

    - Babel Loader  
    Loads JS files for Babel compiling

    - Babel Minify  
    Minifies JS bundle

    - Babel Preset  
    Converts JSX to createElement() calls

- [Compression](https://github.com/webpack-contrib/compression-webpack-plugin)  
Webpack plugin that Gzip compresses HTML, CSS, JS files

- [UglifyJS](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)  
Webpack plugin that Uglifies the JS

- [webpack](https://webpack.js.org/)  
Drives build process

### Post-build

- [Docker](https://www.docker.com/)  
Containerize build

- [NGINX](https://nginx.org/)  
Webserver