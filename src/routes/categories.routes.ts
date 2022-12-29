import { Router } from "express";
import multer from "multer";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({
  // destino para onde o upload vai ser salvo
  dest: "./tmp",
});

// aqui ele ja ta recebendo o /categories
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
