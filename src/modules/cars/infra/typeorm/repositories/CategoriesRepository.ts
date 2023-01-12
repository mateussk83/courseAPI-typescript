// tem varios metodos de banco de dados como insert, delete etc...
import { getRepository, Repository } from "typeorm";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }
  //create vai receber um objeto do tipo ICreateCategoryDTO e o tipo desta função é void ela não tem retorno
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // a gente precisa criar esta entidade
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // Select * from categories where name = "name" limit 1
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
