import AppDataSource from "../data-source";
import { CategoryEntity } from "../entities/CategoryEntity";
class CategoryService {
  private categoryRepository = AppDataSource.getRepository(CategoryEntity);

  async getAll() {
    console.log("CategoryService get all");    
    return this.categoryRepository.find();
  }

  async getById(identifier: number) {
    console.log("CategoryService getbyid");
    return this.categoryRepository.findOneBy({ id: identifier });
  }

  async create(category: CategoryEntity) {
    console.log("CategoryService");
    const newCategory = this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }
  async update(id: string, category: CategoryEntity) {
    console.log("CategoryService");
    return this.categoryRepository.update(id, category);
  }

  async delete(identifier: string) {
    console.log("CategoryService");
    const category = this.categoryRepository.findOneBy({ id: +identifier });
   
    return this.categoryRepository.delete(identifier);
  }

}
export default CategoryService;