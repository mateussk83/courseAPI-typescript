import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to Authenticate an User", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000111",
      email: "user@teste.com",
      password: "12314",
      name: "User Teste",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an not existent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "1234",
      }); 
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
   expect(async () => {
    const user:ICreateUserDTO = {
     driver_license: "9999",
     email: "user@user.com",
     password:"1234",
     name: "User test Error"
    } 

    await createUserUseCase.execute(user)

    await authenticateUserUseCase.execute({
     email: user.email,
     password: "IncorrectPassword"
    })



   }).rejects.toBeInstanceOf(AppError)
  })
});
