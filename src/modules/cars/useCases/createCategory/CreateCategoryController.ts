 import { Request, Response } from "express"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
// o controller tem a responsabilidade de estar com oq estava antes dentro da rota
 class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase){}

  handle(request: Request, response: Response):Response {
   const { name, description } = request.body;

 
   this.createCategoryUseCase.execute({name, description})
 
   return response.status(201).send();
  }
 }

 export { CreateCategoryController }