import e from "express";
import { renderIndex } from "./screens/index.js";
import students from "./routes/students.js";
import teachers from "./routes/teachers.js";


const app = e();

app.use(e.json());

app.get("/", renderIndex);

app.use(students);
app.use(teachers)

app.listen(4000, (error) => {
  console.log("Server started");
});
