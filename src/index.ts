import express from "express";
import cors from "cors";
import AppDataSource from "./data-source";
import categoryRouter from "./routes/CategoryRoutes";
import productRouter from "./routes/ProductRoutes";

//initialisation de orm
AppDataSource.initialize()
.then(() => {
  const app = express();

  app.use(cors()); //autorise tout monde
  app.use(express.json()); //on peut recuperer des infos dans un body en format json

  app.use("/api/categories", categoryRouter);
  app.use("/api/products", productRouter);
  app.listen(process.env.PORT, () => {
    console.log(
      `L'api est en route sur l'adresse localhost:${process.env.PORT}`
    );
  });
});
// .catch((err) => {
//   console.log(`Une erreur s'est produite :`, err);
// });