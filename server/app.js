const express = require('express');
const app = express();

const PORT = 1234;
app.post('/goods', (req, res) => {
  res.json({
    code: 0,
    list: [{ message: 'test' }]
  });
});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
