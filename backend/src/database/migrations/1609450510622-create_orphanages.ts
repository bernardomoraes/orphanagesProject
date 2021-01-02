import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1609450510622 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //Realizar Alterações
    //Criar Tabale, Criar um novo campo, Deletar algum Campo
    await queryRunner.createTable(new Table({
      name: 'orphanages',
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
          name: 'name',
          type: 'varchar' // Campo String Curto Ate mais de 200 caracteries
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',

        },
        {
          name: 'instructions',
          type: 'boolean',
          default: false,
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name:'open_on_weekends',
          type: 'boolean',
          default: false,
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Desfazer o que foi feito no método UP
    await queryRunner.dropTable('orphanages');
  }

}
