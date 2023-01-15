import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  async findByLicencePlate(license_plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === license_plate);

  }
  cars: Car[] = [];
  
  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amoute,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
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
    return car
  }
}

export { CarsRepositoryInMemory };
