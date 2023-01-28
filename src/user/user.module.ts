import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSchema } from "./user.schema";
import { PhotoSchema } from "src/photo/photo.schema";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema, PhotoSchema]),
    SequelizeModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
