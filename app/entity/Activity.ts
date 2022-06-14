import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activities {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    length: 100
  })
  nameActivity: string | undefined;

  @Column({
    length:255
  })
  url: string | undefined;

  @Column("int")
  valuePoints: number | undefined;

}