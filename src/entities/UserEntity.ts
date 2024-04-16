import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../models/interfaces/UserRole";
import { AddressEntity } from "./AddressEntity";
import { OrderEntity } from "./OrderEntity";
import { ProductEntity } from "./ProductEntity";

@Entity({ name: "user", schema: "public" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  firstname?: string;

  @Column({ nullable: false })
  lastname?: string;

  @Column({ nullable: false })
  password?: string;

  @Column({ nullable: false })
  email?: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role?: UserRole;

  @OneToMany(()=>AddressEntity,(address)=>address.user,{cascade: true})
  address?:AddressEntity[]

  @OneToMany(()=>OrderEntity,(order)=>order.user,{cascade: true})
  orders?:OrderEntity[]

  @ManyToMany(()=>ProductEntity,(product:ProductEntity)=>product.users,{ cascade: true, nullable: true })
  products?:ProductEntity[]
}
