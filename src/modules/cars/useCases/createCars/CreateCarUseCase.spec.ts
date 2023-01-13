import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarUseCase } from "./CreateCarUseCase"


let createCarUseCase: CreateCarUseCase
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
 beforeEach(() => { 
  carsRepository: new CarsRepositoryInMemory()
  createCarUseCase = new CreateCarUseCase(carsRepository)
 })
 it("should to be able to create a new car", async () => {
  await createCarUseCase.execute({
   name: "Name car",
   description:"Dscription car",
   daily_rate: 100,
   license_plate: "ABC-1234",
   fine_amoute: 60,
   brand: "Brand",
   category_id: "Category",
  })
 })
})