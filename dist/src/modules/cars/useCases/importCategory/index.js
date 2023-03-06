"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCategoryController = void 0;
const ImportCategoryController_1 = require("./ImportCategoryController");
const ImportCategoryUseCase_1 = require("./ImportCategoryUseCase");
const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase_1.ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController_1.ImportCategoryController(importCategoryUseCase);
exports.importCategoryController = importCategoryController;
