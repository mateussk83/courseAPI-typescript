import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createspecificationController } from "../modules/cars/useCases/createSpecification";


const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  return createspecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  const all = specificationRepository.list();
  return response.status(200).json(all);
});

export { specificationsRoutes };
