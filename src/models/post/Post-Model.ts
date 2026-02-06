import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
export class PostModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column()
  title!: string;
  @Column()
  slug!: string;
  @Column()
  excerpt!: string;
  @Column()
  content!: string;
  @Column()
  coverImageUrl!: string;
  @Column()
  published!: boolean;
  @CreateDateColumn()
  createdAt!: string;
  @UpdateDateColumn()
  updatedAt!: string;
  @Column()
  author!: string;
  @DeleteDateColumn()
  deletedAt!: Date;
}
