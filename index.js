const express = require("express");
const app = express();
const PORT = 5555;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`i am listening on ${PORT}`);
});
