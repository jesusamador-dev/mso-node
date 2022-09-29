import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "qr1bd_users", synchronize: false })
export class Users {
	@PrimaryColumn({
		type: "int",
	})
	id: number = 0;

	@Column({
		type: "varchar",
		length: 100,
	})
	email: string = "";

	@Column({
		type: "varchar",
		length: 100,
	})
	password: string = "";

	@Column({
		type: "varchar",
		length: 400,
	})
	name: string = "";
}
