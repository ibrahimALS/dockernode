const express = require('express');
const { APP_SERVER_PORT, MONGO_URL, SESSION_SECRET } = require('./config/config');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');

const app = express();

app.enable('trust proxy') // for nginx

app.use(cors())

let sess = {
    secret: SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: MONGO_URL }),
    cookie: {
        httpOnly: true,
        maxAge: (14 * 24 * 60 * 60),
    }
}

if (app.get('NODE_ENV') === 'production') {
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.use(express.json());

connectDatabase = () => {
    mongoose.connect(MONGO_URL)
        .then(() => console.log(`\n database connected successfully.`))
        .catch(() => setTimeout(connectDatabase, 3000))
}

connectDatabase()

app.get('/api', (req, res) => {
    console.log("/api");
    res.send({ message: "docker node server api " })
})

app.use('/api/v1/users', require('./routes/userRoutes'))
app.use('/api/v1/posts', require('./routes/postRoutes'))

app.listen(APP_SERVER_PORT, () => console.log(`\nhttp://localhost:${APP_SERVER_PORT}`));