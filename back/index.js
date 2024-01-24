const express = require('express')
const app = express()

//Setting the port and listening for connections
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})