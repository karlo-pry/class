CREATE TABLE "students" (
	"expediente" integer PRIMARY KEY NOT NULL,
	"nombre" varchar(100) NOT NULL
);

CREATE TABLE "teachers" (
  "clave" integer PRIMARY KEY NOT NULL,
  "nombre" varchar(100) NOT NULL,
  "grado" varchar(60) NOT NULL
)

CREATE TABLE "class" (
  "id" integer PRIMARY KEY NOT NULL,
  "nombreClase" varchar(100) NOT NULL,
  "semestre" integer NOT NULL
)