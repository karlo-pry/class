import { Router } from "express";
import pg from "pg";
const { Client } = pg;
const classes = Router();


classes.get("/classes", (req, res) => {
  return res.send("ALL CLASSES");
})

export default classes;