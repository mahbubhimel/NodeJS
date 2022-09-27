const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');

const app = {};

data.delete('test', 'newFile', (err) => {
    console.log(err);
});

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
