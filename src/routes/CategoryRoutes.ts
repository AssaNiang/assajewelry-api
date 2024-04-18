import { Router } from "express";
import CategoryController from "../controllers/CategoryController";

const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get("/", (req, res) => {
    console.log("CategoryRouter");
    categoryController.getAll(req, res);
  });

  categoryRouter.get("/:id", (req, res) => {
    console.log("CategoryRouter");
    categoryController.getById(req, res);
  });

  categoryRouter.post("/", (req, res) => {
    console.log("CategoryRouter");
    categoryController.create(req, res);
  });
  
  categoryRouter.put("/:id", (req, res) => {
    console.log("CategoryRouter");
    categoryController.update(req, res);
  });
  
  categoryRouter.delete("/:id", (req, res) => {
    console.log("CategoryRouter");
    categoryController.delete(req, res);
  });

  export default categoryRouter;
