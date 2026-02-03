import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./app/assignmentRouter.js";
import accountRouter from "./app/accountRouter.js";



const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.use("/assignments", assignmentRouter);
app.use("/accounts", accountRouter);



app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
