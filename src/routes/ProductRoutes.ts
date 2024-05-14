import { Router } from "express";
import ProductController from "../controllers/ProductController";
import checkToken from "../middlewares/CheckToken";


const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", (req, res) => {
  console.log("ProductRouter");
  productController.getAll(req, res);
});

productRouter.get("/category/:name", (req, res) => {
  console.log("ProductRouter");
  productController.getAllByCategory(req, res);
});

productRouter.get("/:id", (req, res) => {
  console.log("ProductRouter id ");
  productController.getById(req, res);
});


productRouter.post("/",checkToken, (req, res) => {
    console.log("productRouter");
   productController.create(req, res);
  });
  
  productRouter.put("/:id", (req, res) => {
    console.log("productRouter");
   productController.update(req, res);
  });
  
  productRouter.delete("/:id", (req, res) => {
    console.log("productRouter");
   productController.delete(req, res);
  });
  
export default productRouter;