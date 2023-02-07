import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { UserTokens } from "../../infra/typeorm/entities/UserTokens";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../repositories/IUsersTokensRepository";
import { hash } from "bcryptjs"

interface IRequest {
 token: string;
 password: string
}

@injectable()
class ResetPasswordUserUseCase {
constructor(
 @inject("UsersTokensRepository")
 private usersTokensRepository: IUsersTokensRepository,
 @inject("UsersRepository")
 private usersRepository: IUsersRepository,
 @inject("DayjsDateProvider")
 private dateProvider: IDateProvider
) {}

 async execute({password,token}:IRequest) {

  const userToken = await this.usersTokensRepository.findByRefreshToken(token)

  if(!userToken) {
   throw new AppError("Token invalid!")
 }
 if(this.dateProvider.compareIfBefore(userToken.expires_date, this.dateProvider.dateNow())) {
  throw new AppError("Token expired!")
 }

 const user = await this.usersRepository.findById(userToken.user_id)

 user.password = await hash(password, 8)

 await this.usersRepository.create(user)

 await this.usersTokensRepository.deleteById(userToken.id)

 }
}

export { ResetPasswordUserUseCase }