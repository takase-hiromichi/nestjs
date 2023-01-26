import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";
import { Cat } from "./cats.entity";

@EventSubscriber()
export class CatsSubscriber implements EntitySubscriberInterface<Cat> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Cat;
  }

  beforeInsert(event: InsertEvent<Cat>) {
    console.log("Before Insert:", event.entity);
  }
}
