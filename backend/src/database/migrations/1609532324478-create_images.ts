import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1609532324478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, // Coluna Sempre será positiva
                    isPrimary: true, // Indica que essa será a coluna identificadora
                    isGenerated: true, // Ela vai ser gerada automáticamente
                    generationStrategy: 'increment',
                  },
                  {
                      name: 'path',
                      type: 'varchar'
                  },
                  {
                      name: 'orphanage_id',
                      type: 'integer',
                  }
            ],
            foreignKeys: [
                {
                    name:'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
