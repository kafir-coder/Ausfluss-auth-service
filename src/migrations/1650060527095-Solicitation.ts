import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Solicitation1650060527095 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solicitation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'category',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'budget_proposal',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'max_weight',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'delivery_expectation_date',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'loading_location',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'offloading_location',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'producerId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'driverId',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('solicitation', [
      new TableForeignKey({
        columnNames: ['producerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'producer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['driverId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'driver',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('solicitation');
  }
}
