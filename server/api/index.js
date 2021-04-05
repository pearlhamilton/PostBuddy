const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Our express server has departed from port ${port}`));