
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoriesController = new ListCategoryController(listCategoryUseCase);

export { listCategoriesController };
