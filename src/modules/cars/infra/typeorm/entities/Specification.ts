import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
@Entity("specifications")
class Specification {

  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;

  // caso nao tiver é um id ele cria aqui tirando a responsabilidade da rota
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification };
