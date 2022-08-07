import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "qr1bd_users", synchronize: false })
export default class Users {
	@PrimaryColumn({
		type: "int",
	})
	id: number | undefined;
}
