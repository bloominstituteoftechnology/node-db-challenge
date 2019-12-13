const server = require("./server"),
    port = process.env.PORT || 6000;

server.listen(port, () => console.log(`Server running on port ${port}`));