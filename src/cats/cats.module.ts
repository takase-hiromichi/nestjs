import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsController } from "./cats.controller";
import { Cat } from "./cats.entity";
import { CatsService } from "./cats.service";
import { CatsSubscriber } from "./cats.subscriber";

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsSubscriber, CatsService],
})
export class CatsModule {}
