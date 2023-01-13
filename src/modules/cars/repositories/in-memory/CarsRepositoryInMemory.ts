import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amoute,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amoute,
      brand,
      category_id,
    });

    this.cars.push(car);
    throw new Error("Method not implemented.");
  }
}

export { CarsRepositoryInMemory };
