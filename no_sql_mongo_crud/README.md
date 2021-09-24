# Connecting to a Mongo DB via NPM install

```js
// connect to mongo
mongoose.connect(
  'mongodb://localhost/database-name-here',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log('Connected to MongoDB');
  }
);
```
