import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
	@ObjectIdColumn()
	__id: string;

	@PrimaryColumn()
	id: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;
}
