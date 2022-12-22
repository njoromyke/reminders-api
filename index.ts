import express from "express";
import remindersRouters from "./routes/reminders";

const app = express();

app.use("/reminders", remindersRouters);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8000, () => console.log("Server started"));
