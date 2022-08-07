import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from "typeorm";

export class UsersActivities1655592815084 implements MigrationInterface {
	name = "UsersActivities1655592815084";

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (await queryRunner.hasTable("points")) return;
		await queryRunner.createTable(
			new Table({
				name: "points",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "user_id",
						type: "int",
						length: "32",
					},
					{
						name: "activity_id",
						type: "varchar",
						length: "500",
					},
					{
						name: "points",
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

		await queryRunner.createForeignKey(
			"points",
			new TableForeignKey({
				columnNames: ["user_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "qr1bd_users",
			})
		);

		await queryRunner.createForeignKey(
			"points",
			new TableForeignKey({
				columnNames: ["activity_id"],
				referencedColumnNames: ["id"],
				referencedTableName: "activities",
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("points");
	}
}
