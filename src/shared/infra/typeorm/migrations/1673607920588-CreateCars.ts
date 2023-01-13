import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1673607920588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    { 
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "daily_rate",
                        type: "numeric"
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "license_plate",
                        type: "varchar"
                    },
                    {
                        name: "find_amount",
                        type: "numeric"
                    },
                    {
                        name: "brand",
                        type: "varchar"
                    },
                    {
                        name: "category_id",
                        type: "uuid",
                        // o valor pode ser nulo 
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ],
                foreignKeys: [
                    {
                        name: "FKCategoryCar",
                        referencedTableName: "categories",
                        referencedColumnNames: ["id"],
                        columnNames: ["category_id"],
                        // quando colocar isso quer dizer quando a tabela pai sofrer alteração as tabelas filhos vao sofrer tbm
                        // set null quer dizer que se o id pai for deletado a tabela filho fica com o valor de nulo
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
