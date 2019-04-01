// play this: https://www.youtube.com/watch?v=74cfflczqRw

// code away!

// In this challenge, create a web API around the following resources: `Projects` and `Actions`.

const express = require("express");

const projectRouter = require('./routers/projectRouter.js')
const actionRouter = require('./routers/actionRouter.js')

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', async (req, res) => {
  res.status(200).send(`
    RUN, COWARD.
    I AM... SINISTAR.
  `);
});


server.listen(1982, () => {
  console.log('\n*** BEWARE! I HUNGER! ***\n');
});