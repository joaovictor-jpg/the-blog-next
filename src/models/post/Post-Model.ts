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
  @Column({ name: "title", type: "text", nullable: false })
  title!: string;
  @Column({ name: "slug", type: "text", nullable: false, unique: true })
  slug!: string;
  @Column({ name: "excerpt", type: "text", nullable: false })
  excerpt!: string;
  @Column({ name: "content", type: "text", nullable: false })
  content!: string;
  @Column({ name: "cover_image_url", type: "text", nullable: false })
  coverImageUrl!: string;
  @Column({ name: "published", type: "boolean", nullable: false })
  published!: boolean;
  @Column({ name: "author", type: "text", nullable: false })
  author!: string;
  @CreateDateColumn("created_at")
  createdAt!: Date;
  @UpdateDateColumn("updated_at")
  updatedAt!: Date;
  @DeleteDateColumn("deleted_at")
  deletedAt!: Date;
}
