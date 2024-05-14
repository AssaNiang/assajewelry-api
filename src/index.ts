import express from "express";
import cors from "cors";
import http from "http"; // importez le module 'http' pour accéder aux sockets
import AppDataSource from "./data-source";
import categoryRouter from "./routes/CategoryRoutes";
import productRouter from "./routes/ProductRoutes";
import userRouter from "./routes/UserRoutes";

AppDataSource.initialize()
.then(() => {
  const app = express();
  app.use(cors()); 
  app.use(express.json()); 
  app.use("/api/categories", categoryRouter);
  app.use("/api/products", productRouter);
  app.use("/api/users", userRouter);
  app.listen(process.env.PORT, () => {
    console.log(
      `L'api est en route sur l'adresse localhost:${process.env.PORT}`
    );
  });
})
.catch((err) => {
  console.log(`Une erreur s'est produite :`, err);
});

