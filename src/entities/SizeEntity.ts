import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { ProductEntity } from "./ProductEntity";



@Entity({name: "size", schema: 'public'})
export class SizeEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ nullable: false})
    name?: string;
 
    @ManyToMany(()=>ProductEntity,(product:ProductEntity)=>product.size,{ cascade: true })
    products?:ProductEntity[]
}