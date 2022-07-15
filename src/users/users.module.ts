import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User],{
    type: 'mysql',
    host: process.env.HOST,
    port: 3306,
    username: process.env.USERDB,
    password: process.env.PASSWORD,
    database: process.env.NAMEDB,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrationsRun: true,
    logging: true,
  })],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
