/*
This is the entry point to the program.

It creates the application instance which serves the angular application.
*/

import * as express from 'express';
import { join } from 'path';
import * as helmet from 'helmet';
import { createServer } from 'http';

/** The exress aplication instance */
const app: express.Application = express();

////////////////////////////////////////////////
// Middleware
//
// Protects agains common web vulnerabilities
app.use(helmet());

////////////////////////////////////////////////
// Routes
//
// Point static paths to dist
app.use(express.static(join(__dirname, 'src/')));
// Display the main page
app.get('/', (_, res) => {
  res.sendFile(join(__dirname, 'src/index.html'));
})
// Catch all other routes and return to root
app.get('*', (_, res) => {
  res.redirect('/');
});

////////////////////////////////////////////////////////////////////////
// Start up the Node Server
//
// Set the port
const port = process.env.PORT || '3000';
app.set('port', port);
// Create and then listen to output
createServer(app).listen(port, () => console.log(`Server running on localhost:${port}`));
