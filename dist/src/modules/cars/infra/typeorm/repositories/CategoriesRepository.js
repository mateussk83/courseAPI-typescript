"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
// tem varios metodos de banco de dados como insert, delete etc...
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class CategoriesRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Category_1.Category);
    }
    //create vai receber um objeto do tipo ICreateCategoryDTO e o tipo desta função é void ela não tem retorno
    create({ name, description }) {
        return __awaiter(this, void 0, void 0, function* () {
            // a gente precisa criar esta entidade
            const category = this.repository.create({
                description,
                name,
            });
            yield this.repository.save(category);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.repository.find();
            return categories;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // Select * from categories where name = "name" limit 1
            const category = yield this.repository.findOne({ name });
            return category;
        });
    }
}
exports.CategoriesRepository = CategoriesRepository;
