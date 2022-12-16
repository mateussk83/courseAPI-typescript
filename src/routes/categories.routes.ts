import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
// chamando o nosso repositorio
const categoriesRepository = new CategoriesRepository();

// aqui ele ja ta recebendo o /categories
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({name, description})
  
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
 const all = categoriesRepository.list()
 return response.json(all)
})


export { categoriesRoutes };
