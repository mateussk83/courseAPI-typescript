import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationRepository";
// singleton é o nome dado para um INSTANCE que geralmente serve pra indicar se ja existe determinada classe


container.registerSingleton<ICategoriesRepository>(
 "CategoriesRepository",// nomeclatura do singleton
 CategoriesRepository// classe
 )
 
 container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",// nomeclatura do singleton
  SpecificationsRepository// classe
  )