import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";
// tem varios metodos de banco de dados como insert, delete etc...
import { getRepository, Repository } from "typeorm";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  // temos um bug pq esta sendo criado duas a categories logo nao conseguimos retornar a lista comt odos os valores
  // entao criamos o instance que serve para deixar criar apenas uma lista
  private static INSTANCE: CategoriesRepository;

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
    const category = this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
