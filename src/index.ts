import express from "express";
import cors from "cors";
import AppDataSource from "./data-source";
import bookRouter from "./routes/BookRoutes";

//initialisation de orm
AppDataSource.initialize().then(() => {
  const app = express();
  app.use(cors()); //autorise tout monde
  app.use(express.json()); //on peut recuperer des infos dans un body en format json

  app.use("/api/books", bookRouter);
  app.listen(process.env.PORT, () => {
    console.log(
      `L'api est en route sur l'adresse localhost:${process.env.PORT}`
    );
  });
});
