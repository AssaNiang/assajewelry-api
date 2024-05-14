import { Request, Response } from "express";
import CategoryService from "../services/CategoryService";

class CategoryController {
  private categoryService = new CategoryService();

  async getAll(req: Request, res: Response) {
    console.log("CategoryController get all");

    try {
      const categories = await this.categoryService.getAll();
      console.log("category Controller",categories);
      res.send({ status: "OK", data: categories });
    } catch (error) {
      res.status(500).send({ status: "Error no category", message: error });
    }
  }

  async getById(req: Request, res: Response) {
    console.log("CategoryController get id");

    try {
      const category = await this.categoryService.getById(Number(req.params.id));
      res.send({ status: "OK", data: category });
    } catch (error) {
      res.status(500).send({ status: "Error no category with this id", message: error });
    }
  }

  async create(req: Request, res: Response) {
    console.log(" create CategoryController");

    try {
      const category = await this.categoryService.create(req.body);
      res.send({ status: "OK", data: category });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async update(req: Request, res: Response) {
    console.log(" update CategoryController");

    try {
      const category = await this.categoryService.update(req.params.id, req.body);
      res.send({ status: "OK", data: category });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }

  async delete(req: Request, res: Response) {
    console.log(" delete CategoryController");

    try {
      const category = await this.categoryService.delete(req.params.id);
      res.send({ status: "OK", data: category });
    } catch (error) {
      res.status(500).send({ status: "Failed", message: error });
    }
  }
}
export default CategoryController;