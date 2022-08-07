import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1659914340348 implements MigrationInterface {
    name = 'migrations1659914340348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`activities\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`activities\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`pointsHistoric\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`points\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`points\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`points\` ADD UNIQUE INDEX \`IDX_33bfb626d2281b6380a70e0d30\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`activity_id\``);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`activity_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`points\` ADD UNIQUE INDEX \`IDX_134f664cf06d25a5403a36e027\` (\`activity_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_33bfb626d2281b6380a70e0d30\` ON \`points\` (\`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_134f664cf06d25a5403a36e027\` ON \`points\` (\`activity_id\`)`);
        await queryRunner.query(`ALTER TABLE \`points\` ADD CONSTRAINT \`FK_33bfb626d2281b6380a70e0d308\` FOREIGN KEY (\`user_id\`) REFERENCES \`qr1bd_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`points\` ADD CONSTRAINT \`FK_134f664cf06d25a5403a36e0272\` FOREIGN KEY (\`activity_id\`) REFERENCES \`activities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`points\` DROP FOREIGN KEY \`FK_134f664cf06d25a5403a36e0272\``);
        await queryRunner.query(`ALTER TABLE \`points\` DROP FOREIGN KEY \`FK_33bfb626d2281b6380a70e0d308\``);
        await queryRunner.query(`DROP INDEX \`REL_134f664cf06d25a5403a36e027\` ON \`points\``);
        await queryRunner.query(`DROP INDEX \`REL_33bfb626d2281b6380a70e0d30\` ON \`points\``);
        await queryRunner.query(`ALTER TABLE \`points\` DROP INDEX \`IDX_134f664cf06d25a5403a36e027\``);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`activity_id\``);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`activity_id\` varchar(500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`points\` DROP INDEX \`IDX_33bfb626d2281b6380a70e0d30\``);
        await queryRunner.query(`ALTER TABLE \`points\` CHANGE \`user_id\` \`user_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`points\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`points\` DROP COLUMN \`pointsHistoric\``);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`points\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`activities\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`activities\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

}
