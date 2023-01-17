import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationRepository";
// singleton é o nome dado para um INSTANCE que geralmente serve pra indicar se ja existe determinada classe

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", // nomeclatura do singleton
  CategoriesRepository // classe
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository", // nomeclatura do singleton
  SpecificationsRepository // classe
);
container.registerSingleton<IUsersRepository>(
  "UsersRepository", // nomeclatura do singleton
  UsersRepository // classe
);

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
)
