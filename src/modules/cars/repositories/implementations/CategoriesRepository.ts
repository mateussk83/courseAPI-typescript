import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

// singleton -> é o nome do termo do INSTANCE

class CategoriesRepository implements ICategoriesRepository {
  // inves de const utilizamos ou public ou private
  private categories: Category[];
  // temos um bug pq esta sendo criado duas a categories logo nao conseguimos retornar a lista comt odos os valores
  // entao criamos o instance que serve para deixar criar apenas uma lista
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    // sempre usar this quando usamos de fora pra dentro do constructor
    this.categories = [];
  }
  // e este serve para ver se tem valor no instance se não tiver atribuimos um novo nele
  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }
  //create vai receber um objeto do tipo ICreateCategoryDTO e o tipo desta função é void ela não tem retorno
  create({ name, description }: ICreateCategoryDTO): void {
    //utilizando o constructor do category
    const category = new Category();
    // aqui conseguimos passar um objeto pra ele e quais são os atributos que queremos passar pra o valor
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
