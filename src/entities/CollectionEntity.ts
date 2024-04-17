import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { ProductEntity } from "./ProductEntity";


// @Entity({name: "collection", schema: 'public'})
// export class CollectionEntity {
//     @PrimaryGeneratedColumn()
//     id?: number;
  
//     @Column({ nullable: false })
//     name?: string;

//     @OneToMany(()=>ProductEntity,(product)=>product.collection)
//     products?:ProductEntity[]


// }