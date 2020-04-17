const server = require("./server");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`server is listening on ${PORT}`));
