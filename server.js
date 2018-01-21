import connect from './db';
import App from './app';

connect()
    .then(db => {
        const dbName = 'heroku_t7kth0pg';
        const application = new App(db.db(dbName));
        application.boot();
    })
    .catch(() => console.error('Error getting the app up'));