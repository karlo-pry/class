import { Router } from "express";
import pg from "pg";
const { Client } = pg;
const classes = Router();

const client = new Client({
  database: "sac_db",
  password: "example_db",
  user: "postgres",
  host: "localhost",
  port: 5432,
});

await client.connect();

classes.get("/classes", async (req, res) => {
  const results = await client.query("SELECT * FROM class;")  
  res.json(results.rows);
})

classes.post("/classes", async (req, res) => {
  const {nombreClase, semestre} = req.body;
  await client.query(`INSERT INTO class ("nombreClase", "semestre") VALUES($1, $2)`, [nombreClase, semestre]);
  res.json("Clase creada");
})

classes.delete("/classes/:id", async (req, res) => {
  const { id } = req.params;
  const results = await client.query(`DELETE FROM class WHERE id = $1`, [id]);
  if ( results.rowCount == 1){
    res.json("Borrado con éxito");
  } else {
    res.json("Borrado sin éxito");
  }
})

classes.patch("/classes/:id", async (req, res) => {
  const { id } = req.params;
  const { nombreClase, semestre } = req.body;
  if (!nombreClase || !semestre) {
    return res.json("Faltan datos para actualizar");
  }
  const results = await client.query(`UPDATE class SET "nombreClase" = $1, "semestre" = $2 WHERE id = $3`, [nombreClase, semestre, id]);
  if (results.rowCount == 1){
    res.json(`Actualizada clase ${id}`);
  } else {
    res.json("No se pudo actualizar");
  }
})

export default classes;