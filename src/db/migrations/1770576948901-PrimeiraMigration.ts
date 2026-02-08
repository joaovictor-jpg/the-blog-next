import { MigrationInterface, QueryRunner } from "typeorm";
import data from "../seed/posts.json";

export class PrimeiraMigration1770576948901 implements MigrationInterface {
  name = "PrimeiraMigration1770576948901";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "slug" character varying NOT NULL, "excerpt" character varying NOT NULL, "content" character varying NOT NULL, "cover_image_url" character varying NOT NULL, "published" boolean NOT NULL, "author" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_54ddf9075260407dcfdd7248577" UNIQUE ("slug"), CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`,
    );

    const values = data.posts
      .map((post) => {
        const escape = (text: string) => text.replace(/'/g, "''");
        return `(
                '${post.id}', 
          '${escape(post.title)}', 
          '${escape(post.slug)}', 
          '${escape(post.excerpt)}', 
          '${escape(post.content)}', 
          '${post.coverImageUrl}',
          ${post.published}, 
          '${escape(post.author)}', 
          '${post.createdAt}', 
          '${post.updatedAt}'
            )`;
      })
      .join(", ");

    await queryRunner.query(`
        INSERT INTO "posts" 
        (id, title, slug, excerpt, content, cover_image_url, published, author, created_at, updated_at) 
        VALUES ${values}
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "posts"`);
  }
}
