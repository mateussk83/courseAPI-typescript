import { v4 as uuidV4 } from "uuid";

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  // caso nao tiver é um id ele cria aqui tirando a responsabilidade da rota
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };
