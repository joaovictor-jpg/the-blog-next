import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CachedPostResponse } from "../DTOs/Post-Dtos-response";

@Entity("posts")
export class PostModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column({ name: "title", type: "varchar", nullable: false })
  title!: string;
  @Column({ name: "slug", type: "varchar", nullable: false, unique: true })
  slug!: string;
  @Column({ name: "excerpt", type: "varchar", nullable: false })
  excerpt!: string;
  @Column({ name: "content", type: "varchar", nullable: false })
  content!: string;
  @Column({ name: "cover_image_url", type: "varchar", nullable: false })
  coverImageUrl!: string;
  @Column({ name: "published", type: "boolean", nullable: false })
  published!: boolean;
  @Column({ name: "author", type: "varchar", nullable: false })
  author!: string;
  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt!: Date;

  toPostCache(): CachedPostResponse {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      excerpt: this.excerpt,
      content: this.content,
      coverImageUrl: this.coverImageUrl,
      author: this.author,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
