const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/config.json'); 
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');




const app = express();

// Set up session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

// Set up Handlebars view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set up body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the blog site!'); 
});

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
