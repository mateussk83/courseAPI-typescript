import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "../../repositories/in-memory/UsersTokensRepositoryInMemory";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";


let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProvider: MailProviderInMemory;

describe("Sendo Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });
  it("should be able to send a forgot password mail to user", async () => {

   const sendMail = jest.spyOn(mailProvider, "sendMail")

   await usersRepositoryInMemory.create({
    driver_license: "438417",
    email: "to@curul.vu",
    name: "Cordelia Shaw",
    password: "91865379",
   })
   await sendForgotPasswordMailUseCase.execute("to@curul.vu")

   expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
   await expect(
    sendForgotPasswordMailUseCase.execute("nonroz@vel.gy")
   ).rejects.toEqual(new AppError("User does not exists!"))
  });

  it("should be able to create an users token", async () => {
   const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create")

   await usersRepositoryInMemory.create({
    driver_license: "934287",
    email: "co@mibadiim.mr",
    name: "Steven Luna",
    password: "69765131",
   })
   
   await sendForgotPasswordMailUseCase.execute("co@mibadiim.mr")

   expect(generateTokenMail).toBeCalled()

  })
});
