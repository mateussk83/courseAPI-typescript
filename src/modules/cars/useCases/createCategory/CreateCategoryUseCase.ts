import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // para usar o categoriesRepository
  constructor(private categoriesRepository: ICategoriesRepository) {}
  //nao vamos criar um create update delete e sim execute pq esa classe a gente ja sabe oq ela vai fazer
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      // toda vez que tivermos um erro dentro do service vms colocar um trown new Error pq ele nao reconhece o response
      throw new Error("Category Already Exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
