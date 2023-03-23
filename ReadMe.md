Ths is a reproduction of a bug with typescript 5 and cypress 12.8.1.


After cloning the repo, run `yarn install` and then `yarn cy:open` to open ene to end testing with cypress.

Once cypress is open click on the available spec and you get the following error:

```log
Error: Webpack Compilation Error
/Users/bart/Dev/cypress-with-ts5/tsconfig.json
[tsl] ERROR
      TS5053: Option 'sourceMap' cannot be specified with option 'inlineSourceMap'.
    at Watching.handle [as handler] (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/@cypress/webpack-preprocessor/dist/index.js:212:23)
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Watching.js:99:9
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/tapable/lib/Hook.js:154:20)
    at Watching._done (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Watching.js:98:28)
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Watching.js:73:19
    at Compiler.emitRecords (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Compiler.js:499:39)
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Watching.js:54:20
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Compiler.js:485:14
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/tapable/lib/Hook.js:154:20)
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Compiler.js:482:27
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/neo-async/async.js:2818:7
    at done (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/neo-async/async.js:3522:9)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/tapable/lib/Hook.js:154:20)
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/node_modules/webpack/lib/Compiler.js:464:33
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/graceful-fs/graceful-fs.js:143:16
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/graceful-fs/graceful-fs.js:143:16
    at ~/Cypress/12.8.1/Cypress.app/Contents/Resources/app/packages/server/node_modules/graceful-fs/graceful-fs.js:61:14
    at FSReqCallback.oncomplete (node:fs:197:23)
```