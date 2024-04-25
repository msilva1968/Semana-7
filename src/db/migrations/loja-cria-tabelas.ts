import { MigrationInterface, QueryRunner } from 'typeorm';

export class criaTabelas1684864570168 implements MigrationInterface {
  name = 'criaTabelas1684864570168';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "usuarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, "email" character varying(70) NOT NULL, "senha" character varying(255) NOT NULL, "cpf" character varying(11) NOT NULL, "telefone" character varying(10) NOT NULL, "estado" character varying(2) NOT NULL, "cidade" character varying(50) NOT NULL, "bairro" character varying(50) NOT NULL, "rua" character varying(200) NOT NULL, "numero" character varying(10) NOT NULL, "complemento" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "usuarios"`);
  }
}
