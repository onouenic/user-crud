import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: host,
      port: port,
      username: username,
      password: password,
      database: dbname,
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
    host: host,
    port: port,
    username: username,
    password: password,
    database: dbname,
    entities: [UserEntity],
    synchronize: false,
    logging: true,
  }),

  config para conexão postgres
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: host,
      port: port,
      username: username,
      password: password,
      database: dbname,
      entities: [UserEntity],
      synchronize: false,
      logging: true,
    })
*/
