import { Request, Response } from "express";
import { ProductEntity } from "../entities/ProductEntity";
import ProductService from "../services/ProductService";
import { mapProductEntity } from "../services/ProductMapper";

class ProductController {
  private productService = new ProductService();

  async getAll(req: Request, res: Response) {
    console.log("ProductController");

    try {
      const productEntities = await this.productService.getAll();
      const products = productEntities.map((entity: ProductEntity) =>
        mapProductEntity(entity)
      );
      res.send({ status: "OK", data: products });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
  async getAllByCategory(req: Request, res: Response) {
    try {
      const categories = await this.productService.getAllByCategory(
        req.params.name
      );
      const products = categories.map((entity: ProductEntity) =>
        mapProductEntity(entity)
      );
      res.send({ status: "OK", data: products });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const productEntity = await this.productService.getById(
        Number(req.params.id)
      );

      if (!productEntity) {
        return res.status(404).send({
          status: "Failed",
          message: "Le produit avec l'ID spécifié n'a pas été trouvé.",
        });
      }

      const product = mapProductEntity(productEntity);
      res.send({ status: "OK", data: product });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({
        status: "Failed",
        message:
          "Une erreur s'est produite lors de la récupération du produit par ID.",
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const productEntity = await this.productService.create(req.body);
    console.log("le produit est créé");
    const product = mapProductEntity(productEntity);
      res.send({ status: "OK", data: product });
      // res.send({ status: "OK", data: productEntity });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async update(req: Request, res: Response) {
    console.log("productController");

    try {
      const product = await this.productService.update(req.params.id, req.body);
      res.send({ status: "OK", data: product });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log("productController");

    try {
      const product = await this.productService.delete(req.params.id);
      res.send({ status: "OK", data: product });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}
export default ProductController;
