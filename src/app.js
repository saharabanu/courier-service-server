const express = require('express');
                             const cors = require('cors');
const app = express();

app.use(cors());

//  const data = 'app';

// const duummmy2345 = 'hello    is it problemmmm';

                                  // const gooddd = 'sdvjsso'



// heath route
                                                     app.get('/', (req, res) => {
  res.status(200).json({ status: 'Success' });
});
module.exports = app;
