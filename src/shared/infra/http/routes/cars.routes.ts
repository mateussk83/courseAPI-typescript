import{ Router } from "express"
import multer from "multer";
import { CreateCarController } from "../../../../modules/cars/useCases/createCars/CreateCarController";
import { CreateCarSpecificationController } from "../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "../../../../modules/cars/useCases/uploadCarImages/UploadCarImagesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "../../../../config/upload";


const carsRoutes = Router();

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarsSpecificationController = new CreateCarSpecificationController()
const uploadCarImagesController = new UploadCarImagesController()

const uploadAvatar = multer(uploadConfig.upload("./tmp/cars"));


carsRoutes.post("/",ensureAuthenticated, ensureAdmin, createCarController.handle)
carsRoutes.get("/available", listAvailableCarsController.handle )
carsRoutes.post("/specifications/:id",ensureAuthenticated,ensureAdmin, createCarsSpecificationController.handle)
carsRoutes.post("/images/:id",ensureAuthenticated, ensureAdmin, uploadAvatar.array("images"), uploadCarImagesController.handle)
export { carsRoutes }
