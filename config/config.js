let config = {
    APP_SERVER_PORT: process.env.PORT || 3000,
    MONGO_URL: 'mongodb://root:root@mongo:27017/?authSource=admin',
    SESSION_SECRET: "session secret here"
}

module.exports = config; 