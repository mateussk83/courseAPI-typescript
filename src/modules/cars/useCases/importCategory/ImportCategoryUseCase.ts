import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
// stream -> careregar em partes

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File):Promise<IImportCategory[]> {
    // promise diz que quando chegar aqui ele tem que esperar o termino da promisse que pode dar dois resultados
    // o resolve ou o reject
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      //biblioteca responsavel por cuidar da linha
      const parseFile = csvParse();

      // a gente tem o stream e a linha lida do arquivo o pipe vai enviar para algum lugar
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          // desestruturação em lista
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        // aqui diz quando terminar o parse do arquivo vai fazer isso aqui corretamente
        .on("end", () => {
          // ele limpa o arquivo pra nao gerar nada
          fs.promises.unlink(file.path)
          resolve(categories);
        })
        .on("error", (err) => {
         reject(err);
        });

    });
  }
  // quando temos o async e o await temos que definir que o tipo do returno é uma Promise<alguma coisa até void>
  async execute(file: Express.Multer.File): Promise<void> {
   // agr com o await ele vai esperar a atualização pra passar a linha de baixo
    const categories = await this.loadCategories(file);
    // map percorre linha por linha fazendo alterações
    categories.map(async (category) => {
     const { name, description } = category;
     const existCategory = this.categoriesRepository.findByName(name);
     if(!existCategory) {
      this.categoriesRepository.create({
       name,
       description
      })
     }
    })
  }
}

export { ImportCategoryUseCase };
