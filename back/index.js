const express = require('express')
const app = express()
const cors = require("cors");
const userRoute=require("./routes/usersRoute")

//Setting the port and listening for connections
const port = 3000;
app.use(express.json());
app.use(cors());



app.use("/users",userRoute)



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})