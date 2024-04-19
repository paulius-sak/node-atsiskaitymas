import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ticketRouter from "./src/routes/ticket.js";
import userRouter from "./src/routes/user.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log("err: ", err);
});

app.use(ticketRouter);
app.use(userRouter);

app.use((req, res) => {
  return res.status(404).json({ status: "Endpoint doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`app started - port ${process.env.PORT}`);
});
