import {  inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken"

import { compare } from "bcryptjs"
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
 email: string;
 password: string;
}
interface IResponse {
 user: {
  name: string,
  email: string
 };
 token:string;
}

@injectable()
class AuthenticateUserUseCase {
 constructor(
  @inject("UsersRepository")
  private usersRepository: IUsersRepository
 ) {}
 async execute({ email, password }:IRequest): Promise<IResponse> {
  const user = await this.usersRepository.findByEmail(email) 

  if(!user) {
   throw new AppError("Email or password incorrect!")
  }

  const passwordMatch = await compare(password, user.password);

  if(!passwordMatch) {
   throw new AppError("Email or password incorrect!")
  }

  // no segundo parametro é uma string pra fortificar a senha neste caso entra em algum site gerador de md5 e gera
  const token = sign({}, "39536097be8c345051a36da0e8816119", {
   subject: user.id,
   //quando expira o token
   expiresIn:"1d"
  });

  const tokerReturn: IResponse = {
   token,
   user: {
    name: user.name,
    email: user.email
   }
  }
  return tokerReturn

 }
}

export { AuthenticateUserUseCase }