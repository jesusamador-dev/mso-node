import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Activities } from "./Activities";
import { Users } from "./Users";

@Entity()
export class Points {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@OneToOne(() => Users, {
		onDelete: "NO ACTION",
	})
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id"
	})
	userId: number | undefined;

	@OneToOne(() => Activities, {
		onDelete: "NO ACTION",
	})
	@JoinColumn({
		name: "activity_id",
	})
	acitivityId: number | undefined;

	@Column("int")
	points: number | undefined;

	@Column("int")
	pointsHistoric: number | undefined;
}
