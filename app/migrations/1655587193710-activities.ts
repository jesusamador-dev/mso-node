import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class activities1655587193710 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		if (await queryRunner.hasTable("activities")) return;
		await queryRunner.createTable(
			new Table({
				name: "activities",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "name",
						type: "varchar",
						length: "32",
					},
					{
						name: "url",
						type: "varchar",
						length: "500",
					},
					{
						name: "value_points",
						type: "int",
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "CURRENT_TIMESTAMP",
					},
				],
			}),
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("activities");
	}
}
