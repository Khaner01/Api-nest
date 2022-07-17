import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database: "crud",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrationsRun: true,
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}