import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "./ISpecificationRepository";




class SpecificationsRepository implements ISpecificationsRepository {
 private specification: Specification[];
 
 constructor () {
  this.specification = [];
 }
 create({ name, description }: ICreateSpecificationDTO): void {
  const specification = new Specification();

  Object.assign(specification, {
   name,
   description,
   created_at: new Date()
  })

  this.specification.push(specification)
 }

 findByName(name:string) {
  const specification = this.specification.find(repository=>  repository.name === name);
  return specification;
  }

  list(): Specification[] {
   return this.specification;
  }
 }

export { SpecificationsRepository }