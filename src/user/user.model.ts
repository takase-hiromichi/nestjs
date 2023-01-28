import { Column, PrimaryKey, Table, Model } from "sequelize-typescript";

@Table
export class User extends Model {
  @PrimaryKey
  id: number;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column({ defaultValue: true })
  isActive: boolean;
}
