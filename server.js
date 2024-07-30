const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const DB = process.env.MONGODB_URI;

mongoose
  .connect(DB)
  .then(() => console.log("Database successfully connected"))
  .catch((error) => {
    console.error(error);
    process.exit();
  });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Your app is listening on port ${port}`));
