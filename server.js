const express = require("express");
const SERVER = express();
const PORT = process.env.PORT || 3456;

SERVER.use(express.json());

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
