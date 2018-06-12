# bp-frontend

How frontend apps are built.

## Technologies

### Development

- React  
Component-based development

- Redux  
Implementation of the Flux design pattern:  
`Action > Dispatcher > Store > View`  
or in the case where Middleware is used:  
`Middleware > Action(s) > Dispatcher > Store > View`

- styled-components  
CSS in your JavaScript.

- webpack-dev-server  
Local development server with hot-reloading & more.

- remote-redux-devtools  
Local development plugin that links with [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

- redux-thunk  
Allows writing action creators (Middleware) that return a function instead of an action. Effectively allowing async Store dispatches.

### Testing

- Cypress  
End to End Testing - Spec tests

- Enzyme  
React traversal, manipulation and assertions

- Jest  
React Snapshot testing

- Lighthouse  
Auditing

- Pa11y  
Accessibility Testing

- Sinon  
Stubs and Mocks

### Build

- Babel

    - Babel Core  
    JS compiler

    - Babel Loader  
    Loads JS files for Babel compiling

    - Babel Minify  
    Minifies JS bundle

    - Babel Preset  
    Converts JSX to createElement() calls

- Compression  
Gzip compresses HTML, CSS, JS files

- UglifyJS  
Uglifies the JS

- Webpack  
Drives build process

### Post-build

- Docker  
Containerize build

- NGINX  
Webserver