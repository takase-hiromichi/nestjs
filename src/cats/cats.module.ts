import { Module } from "@nestjs/common";
import { env } from "process";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { CatsDevService } from "./cats.service.dev";
import { CatsProdService } from "./cats.service.prod";

@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: CatsService,
      useClass:
        env.NODE_ENV === "development" ? CatsDevService : CatsProdService,
    },
  ],
})
export class CatsModule {}
