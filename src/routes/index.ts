import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

// primeiro parametro do use podemos usar o para definir uma rota padrao pra todos os inputs que receber "/categories"
router.use("/categories",categoriesRoutes);
router.use("/specifications",specificationsRoutes);


export { router } 