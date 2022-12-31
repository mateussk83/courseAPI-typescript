import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

// é um decorator do proprio typeorm
@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  // quando temos um created_at ou um update_at temos um anotation especial
  @CreateDateColumn()
  created_ad: Date;

  // caso nao tiver é um id ele cria aqui tirando a responsabilidade da rota
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
