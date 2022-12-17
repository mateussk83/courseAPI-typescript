import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
// primeiro parametro do use podemos usar o para definir uma rota padrao pra todos os inputs que receber "/categories"
app.use("/categories",categoriesRoutes);
app.use("/specifications",specificationsRoutes);

app.listen(3333);
