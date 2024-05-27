import AppDataSource from "../data-source";
import { ProductEntity } from "../entities/ProductEntity";

// import AppDataSource from "../data-source";
class ProductService {
  private productRepository = AppDataSource.getRepository(ProductEntity);

  async getAll() {
    console.log("ProductService");
    //return this.productRepository.find({ relations: ["category", "images"] });
     return this.productRepository.find({ relations: { category: true, images:true,size:true,comments:true } });
  }

  async getAllByCategory(categoryName: string): Promise<ProductEntity[]> {
    console.log("coucou");

    console.log(`ProductService - Products for Category: ${categoryName}`);
    return this.productRepository.find({
      where: { category: { name: categoryName }}, relations: ["category", "images","comments","size"],
    });
  }
  async getById(id: number) {
    console.log("ProductService getbyid");
    return this.productRepository.findOne({
      where: { id: id },
      relations: {  category:true, images:true,comments:true,size:true},
    });
  }

  async create(product: ProductEntity) {
    console.log("create product",product)
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  async update(id: string, product: ProductEntity) {
    return this.productRepository.update(id, product);
  }

  async delete(id: string) {
    return this.productRepository.delete(id);
  }
}

export default ProductService;
