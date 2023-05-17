import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'user_crud',
      entities: [UserEntity],
      synchronize: false,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/* 
  config para conexão no mysql
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: '0.0.0.0',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'user_crud',
    entities: [UserEntity],
    synchronize: false,
    logging: true,
  }),

  config para conexão postgres
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'user_crud',
      entities: [UserEntity],
      synchronize: false,
      logging: true,
    })
*/
