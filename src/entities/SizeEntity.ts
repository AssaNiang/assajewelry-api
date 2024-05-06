import { Column, Entity,ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import { ProductEntity } from "./ProductEntity";



@Entity({name: "size", schema: 'public'})
export class SizeEntity {
    @PrimaryGeneratedColumn()
    id?: number;
  
    // @Column({ nullable: true})
    // name?: string;
    
    @Column({ nullable: false})
    name?: string;
 
    @ManyToMany(()=>ProductEntity,(product:ProductEntity)=>product.size,{ cascade: true })
    products?:ProductEntity[]
}