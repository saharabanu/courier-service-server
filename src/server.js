const app = require('./app');
const { port } = require('./config');
const connectDb = require('./database/connectDb');

connectDb();

app.listen(port, () => {
  console.log(`Courier Server is listening on port ${port}`);
});
