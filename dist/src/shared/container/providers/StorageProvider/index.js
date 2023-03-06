"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const LocalStorageProvider_1 = require("./implementations/LocalStorageProvider");
const S3StorageProvider_1 = require("./implementations/S3StorageProvider");
const diskStorage = {
    ethereal: LocalStorageProvider_1.LocalStorageProvider,
    ses: S3StorageProvider_1.S3StorageProvider
};
tsyringe_1.container.registerInstance("StorageProvider", diskStorage[process.env.disk]);
