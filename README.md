# ImageCarousel

This is an example for creating an image carousel with [Angular](https://angular.io) version ~~8.3.16~~ 10.0.10.

*Originally created with Angular 8.3.16*

> Images courtesy of [Unsplash](https://unsplash.com)


## Development & Testing

This application in its entirety can be served locally in development by running:
```bash
npm run angular
```
The development server runs at `http://localhost:5000`.


## Express Server

After building, the compiled angular application is served using [Express](http://expressjs.com). The Express server is written in Typescript and must be compiled with tsc. Do not run `node .` to create the server.

Start the application using the npm start script:
```bash
npm start
# or
npm run start
```

The application must be run using the npm start script as the Express server is compiled to JS when the start script is run.


## Build

Build the application with:
```bash
npm run build:dev 	# Builds the application with development configuration
npm run build 		# Builds the application for production
```
