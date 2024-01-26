
const express = require("express");
const PORT = 8080
const usersRoutes = require('./routes/userRoutes');
const flightsRoutes = require('./routes/flightRoutes');
const bookingsRoutes = require('./routes/bookingRoutes');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

app.use('/users' , usersRoutes);
app.use('/flights' , flightsRoutes);
app.use('/bookings', bookingsRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
