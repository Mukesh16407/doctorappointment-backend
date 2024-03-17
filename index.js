const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./config/dbconfig.js");
require("dotenv").config();
const userRoute = require("./routes/userRoutes.js");
const adminRoute = require("./routes/adminRoutes");
const doctorRoute = require("./routes/doctorRoutes");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, async () => {
  await connect();
  console.log(`Listening on port  ${PORT}`);
});
