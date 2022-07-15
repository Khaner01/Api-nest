import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User],{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'crud',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrationsRun: true,
    logging: true,
  })],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
