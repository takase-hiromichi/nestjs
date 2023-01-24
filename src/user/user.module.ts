import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSchema } from "./user.schema";
import { PhotoSchema } from "src/photo/photo.schema";

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema, PhotoSchema])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
