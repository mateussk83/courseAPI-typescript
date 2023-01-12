import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {

// sempre antes de algum teste ele vai fazer determinada função
 beforeEach(() => {
  categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
  createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
 })

 it("should be able to create a new category", async () => {
  const category = {
   name: "Category Test",
   description: "Category description Test",
  }
  await createCategoryUseCase.execute({
   name: category.name,
   description: category.description
  })

  const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

  console.log(categoryCreated)
  // se a categoria for salva com sucesso ela vai receber o id
  expect(categoryCreated).toHaveProperty("id");
 })

 it("should bot be able to create a new category with same name exists", async () => {
  expect(async () => {
   const category = {
    name: "Category Test",
    description: "Category description Test",
   }
   await createCategoryUseCase.execute({
    name: category.name,
    description: category.description
   })
 
   await createCategoryUseCase.execute({
    name: category.name,
    description: category.description
    
   })
   // aqui ele ta falando se der um erro dentro do app error vai dar sucesso no teste
  }).rejects.toBeInstanceOf(AppError)
  
 })

 
})