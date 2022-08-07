import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activities {
	@PrimaryGeneratedColumn("increment")
	id: number | undefined;

	@Column({
		type: "varchar",
		length: 32,
	})
	name: string | undefined;

	@Column({
		type: "varchar",
		length: 500,
	})
	url: string | undefined;

	@Column({
		name: "value_points",
		type: "int",
	})
	valuePoints: number | undefined;
}
