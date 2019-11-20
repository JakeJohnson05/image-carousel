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
// point static paths to dist
app.use(express.static(join(__dirname, 'src/')));
// Catch all routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'src/index.html'));
});

////////////////////////////////////////////////////////////////////////
// Start up the Node Server
//
// Set the port
const port = process.env.PORT || '3000';
app.set('port', port);
// Create and then listen to output
createServer(app).listen(port, () => console.log(`Server running on localhost:${port}`));
