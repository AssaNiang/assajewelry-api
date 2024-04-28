import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { UserEntity } from "./UserEntity";
import { ProductEntity } from "./ProductEntity";


// @Entity({name: "order", schema: 'public'})
// export class OrderEntity {
//     @PrimaryGeneratedColumn()
//     id?: number;
  
//     @Column({ nullable: false })
//     statut?: string;
 
//     @ManyToOne(()=>UserEntity,(user)=>user.orders,{ onDelete: 'CASCADE' })
//     @JoinColumn({ name: "id_user" })
//     user?:UserEntity

//     @OneToMany(()=>ProductEntity,(product)=>product.order,{cascade: true})
//     products?:ProductEntity[]

// }

              
