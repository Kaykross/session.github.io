const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/users',
    collection: 'sessions',
    // connectionOptions: {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
  });
  store.on('error', function(error) {
    console.log(error);
  });

const dbSessions = ()=>{
   return session({
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 },
    store: store,
    saveUninitialized: true,
    resave: false
  });
};

module.exports = dbSessions;
