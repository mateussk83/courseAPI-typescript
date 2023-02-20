import { container } from "tsyringe"
import { LocalStorageProvider } from "./implementations/LocalStorageProvider"
import { S3StorageProvider } from "./implementations/S3StorageProvider"
import { IStorageProvider } from "./IStorageProvider"

const diskStorage = {
 ethereal: LocalStorageProvider,
 ses: S3StorageProvider
}

container.registerInstance<IStorageProvider> (
 "StorageProvider",
 diskStorage[process.env.disk]
)