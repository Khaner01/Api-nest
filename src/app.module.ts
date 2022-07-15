import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.USERDB,
      password: process.env.PASSWORD,
      database: process.env.NAMEDB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrationsRun: true,
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}