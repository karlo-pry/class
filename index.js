import e from "express";
import { renderIndex } from "./screens/index.js";
import students from "./routes/students.js";


const app = e();

app.use(e.json());

app.get("/", renderIndex);

app.use(students);


app.listen(4000, (error) => {
  console.log("Server started");
});
