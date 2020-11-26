# AngularNgrxSkeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Application structure

├── app\
 │ ├── app-routing.module.ts\
 │ ├── app.component.css\
 │ ├── app.component.html\
 │ ├── app.component.ts\
 │ ├── app.module.ts\
 │ ├── components\
 │ │    └── home\
 │ │    └── navbar\
 │ ├── containers\
 │ │    └── accounts\
 │ │         ├── account.component.css\
 │ │         ├── account.component.html\
 │ │         └── account.component.ts\
 │ ├── models\
 │ │    ├── index.ts\
 │ │    └── account.model.ts\
 │ └── services\
 │ │    ├── index.ts\
 │ │    └── account.service.ts\
 │ ├── app-store\
 │ │    ├── index.ts\
 │ │    ├── app-store.module.ts\
 │ │    ├── selectors.ts\
 │ │    ├── state.ts\
 │ │    └── account-store\
 │ │         ├── actions.ts\
 │ │         ├── effects.ts\
 │ │         ├── index.ts\
 │ │         ├── reducer.ts\
 │ │         ├── selectors.ts\
 │ │         ├── state.ts\
 │ │         └── account-store.module.ts\
 │ ├── shared\
 │ │    └── utils.ts\
 ├── assets\
 ├── browserslist\
 ├── environments\
 │ ├── environment.prod.ts\
 │ └── environment.ts\
 ├── index.html\
 ├── main.ts\
 ├── polyfills.ts\
 ├── styles.css\
 ├── test.ts\
 ├── tsconfig.app.json\
 ├── tsconfig.spec.json\
 ├── Dockerfile\
 ├── docker-compose\
 └── tslint.json\
