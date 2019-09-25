var config = module.exports;

config.environment = 'dev';
config.url = 'http://localhost:7123';
config.db = {
    host: 'localhost',
    name: 'magiccardprices',
    session: 'magiccardprices_sessions',
    port: '27017'
};

config.express = {
    hostName: 'localhost',
    port: 7123,
    ip: '127.0.0.1'
};

config.consoleLogLevel = 'debug';
config.showServerErrors = true;
