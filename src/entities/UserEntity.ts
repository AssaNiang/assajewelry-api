import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../models/interfaces/UserRole";
// import { AddressEntity } from "./AddressEntity";
// import { OrderEntity } from "./OrderEntity";
import { ProductEntity } from "./ProductEntity";
import { CommentEntity } from "./CommentEntity";

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

  // @Column({ nullable: false })
  // email?: string;
  @Column({ nullable: false, unique: true }) 
  email?: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role?: UserRole;

  @OneToMany(() => CommentEntity, (comment) => comment.user, { cascade: true })
  comments?: CommentEntity[];
  // @OneToMany(()=>AddressEntity,(address)=>address.user,{cascade: true})
  // address?:AddressEntity[]

  // @OneToMany(()=>OrderEntity,(order)=>order.user,{cascade: true})
  // orders?:OrderEntity[]
// si j'avais une relation many to many avec les produits
  // @ManyToMany(()=>ProductEntity,(product:ProductEntity)=>product.users,{ cascade: true, nullable: true })
  // products?:ProductEntity[]
}
