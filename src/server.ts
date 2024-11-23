import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config();

const port = process.env.PORT || 5001;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect mongodb or start the server!", error);
    process.exit(1);
  });
